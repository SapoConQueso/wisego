import React, { useEffect, useState } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { logSecurityEvent, checkRateLimit } from '@/lib/security';
import { toast } from 'sonner';

interface SecurityProviderProps {
  children: React.ReactNode;
}

export function SecurityProvider({ children }: SecurityProviderProps) {
  const { user, session } = useAuth();
  const [securityChecks, setSecurityChecks] = useState({
    sessionValid: true,
    rateLimitOk: true,
    integrityCheck: true,
  });

  // Monitor session integrity
  useEffect(() => {
    if (!user || !session) return;

    const checkSessionIntegrity = () => {
      try {
        // Check session expiration
        if (session.expires_at) {
          const expiryTime = session.expires_at * 1000;
          const now = Date.now();
          const timeToExpiry = expiryTime - now;
          
          // Warn if session expires soon (less than 5 minutes)
          if (timeToExpiry < 5 * 60 * 1000 && timeToExpiry > 0) {
            logSecurityEvent('session_expiring_soon', {
              userId: user.id,
              timeToExpiry: Math.floor(timeToExpiry / 1000)
            });
          }
          
          // Session expired
          if (timeToExpiry <= 0) {
            logSecurityEvent('session_expired', { userId: user.id });
            setSecurityChecks(prev => ({ ...prev, sessionValid: false }));
            toast.error('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.');
            return;
          }
        }

        setSecurityChecks(prev => ({ ...prev, sessionValid: true }));
      } catch (error) {
        console.error('Session integrity check failed:', error);
        logSecurityEvent('session_integrity_check_failed', { 
          userId: user.id, 
          error: error instanceof Error ? error.message : 'Unknown error' 
        });
      }
    };

    // Check immediately and then every minute
    checkSessionIntegrity();
    const interval = setInterval(checkSessionIntegrity, 60 * 1000);

    return () => clearInterval(interval);
  }, [user, session]);

  // Monitor for suspicious activity
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        logSecurityEvent('tab_hidden', { userId: user?.id });
      } else {
        logSecurityEvent('tab_visible', { userId: user?.id });
      }
    };

    const handleBeforeUnload = () => {
      logSecurityEvent('page_unload', { userId: user?.id });
    };

    const handleFocus = () => {
      if (user) {
        logSecurityEvent('window_focus', { userId: user.id });
      }
    };

    const handleBlur = () => {
      if (user) {
        logSecurityEvent('window_blur', { userId: user.id });
      }
    };

    // Security event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, [user]);

  // Rate limiting check for user actions
  const checkUserRateLimit = (action: string) => {
    if (!user) return true;

    const key = `${user.id}_${action}`;
    const result = checkRateLimit(key, 10, 60 * 1000); // 10 actions per minute

    if (!result.allowed) {
      logSecurityEvent('rate_limit_exceeded', {
        userId: user.id,
        action,
        resetTime: result.resetTime
      });
      
      toast.error('Demasiadas acciones. Por favor, espera un momento.');
      setSecurityChecks(prev => ({ ...prev, rateLimitOk: false }));
      
      // Reset rate limit status after reset time
      setTimeout(() => {
        setSecurityChecks(prev => ({ ...prev, rateLimitOk: true }));
      }, result.resetTime - Date.now());
      
      return false;
    }

    return true;
  };

  // Content Security Policy monitoring
  useEffect(() => {
    const handleCSPViolation = (event: SecurityPolicyViolationEvent) => {
      logSecurityEvent('csp_violation', {
        userId: user?.id,
        blockedURI: event.blockedURI,
        documentURI: event.documentURI,
        effectiveDirective: event.effectiveDirective,
        originalPolicy: event.originalPolicy,
        violatedDirective: event.violatedDirective,
      });
    };

    document.addEventListener('securitypolicyviolation', handleCSPViolation);

    return () => {
      document.removeEventListener('securitypolicyviolation', handleCSPViolation);
    };
  }, [user]);

  // Provide security context to children
  const securityContext = {
    ...securityChecks,
    checkUserRateLimit,
    logSecurityEvent: (event: string, details?: any) => 
      logSecurityEvent(event, { userId: user?.id, ...details }),
  };

  return (
    <SecurityContext.Provider value={securityContext}>
      {children}
    </SecurityContext.Provider>
  );
}

// Security Context
const SecurityContext = React.createContext<any>(null);

export const useSecurity = () => {
  const context = React.useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};