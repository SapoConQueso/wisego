import { toast } from "sonner";

// Environment security checks
export const isProduction = () => {
  return process.env.NODE_ENV === 'production';
};

export const isDevelopment = () => {
  return process.env.NODE_ENV === 'development';
};

// Content Security Policy helpers
export const sanitizeHtml = (input: string): string => {
  // Basic HTML sanitization - remove dangerous characters
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();
};

// Input validation helpers
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export const validatePassword = (password: string) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  return {
    isValid: password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers,
    hasMinLength: password.length >= minLength,
    hasUpperCase,
    hasLowerCase,
    hasNumbers,
    hasSpecialChar,
    score: [
      password.length >= minLength,
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSpecialChar
    ].filter(Boolean).length
  };
};

export const validateUsername = (username: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  return usernameRegex.test(username);
};

export const validateUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'https:';
  } catch {
    return false;
  }
};

// Rate limiting helpers (client-side)
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStorage = new Map<string, RateLimitEntry>();

export const checkRateLimit = (
  key: string, 
  maxAttempts: number = 5, 
  windowMs: number = 15 * 60 * 1000 // 15 minutes
): { allowed: boolean; remaining: number; resetTime: number } => {
  const now = Date.now();
  const entry = rateLimitStorage.get(key);
  
  if (!entry || now > entry.resetTime) {
    // Reset or create new entry
    const resetTime = now + windowMs;
    rateLimitStorage.set(key, { count: 1, resetTime });
    return { allowed: true, remaining: maxAttempts - 1, resetTime };
  }
  
  if (entry.count >= maxAttempts) {
    return { allowed: false, remaining: 0, resetTime: entry.resetTime };
  }
  
  // Increment count
  entry.count++;
  rateLimitStorage.set(key, entry);
  
  return { 
    allowed: true, 
    remaining: maxAttempts - entry.count, 
    resetTime: entry.resetTime 
  };
};

// Security event logging
export const logSecurityEvent = async (
  event: string, 
  details: Record<string, any> = {}
) => {
  try {
    const logData = {
      event,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      ...details
    };
    
    // Log to console for development
    console.log('[Security Event]', logData);
    
    // In production, this could send to a security monitoring service
    // await fetch('/api/security-log', { 
    //   method: 'POST', 
    //   body: JSON.stringify(logData) 
    // });
  } catch (error) {
    console.error('Failed to log security event:', error);
  }
};

// CSRF protection helpers
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

export const validateCSRFToken = (token: string, storedToken: string): boolean => {
  return token === storedToken && token.length === 64;
};

// Session security helpers
export const isSessionValid = (session: any): boolean => {
  if (!session || !session.access_token || !session.expires_at) {
    return false;
  }
  
  // Check if session is expired (with 5 minute buffer)
  const expiryTime = session.expires_at * 1000;
  const bufferTime = 5 * 60 * 1000; // 5 minutes
  
  return Date.now() < (expiryTime - bufferTime);
};

// Security headers helpers
export const addSecurityHeaders = (headers: HeadersInit = {}): HeadersInit => {
  return {
    ...headers,
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  };
};

// Error message sanitization to prevent information disclosure
export const sanitizeErrorMessage = (error: any): string => {
  if (typeof error === 'string') {
    return error;
  }
  
  if (error?.message) {
    // Replace specific error messages that might leak information
    const message = error.message.toLowerCase();
    
    if (message.includes('user not found') || message.includes('invalid login')) {
      return 'Credenciales inválidas';
    }
    
    if (message.includes('email already registered') || message.includes('already exists')) {
      return 'Email ya registrado';
    }
    
    if (message.includes('password')) {
      return 'Error de contraseña';
    }
    
    return error.message;
  }
  
  return 'Error desconocido';
};

// Safe localStorage helpers
export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  
  setItem: (key: string, value: string): boolean => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  },
  
  removeItem: (key: string): boolean => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  }
};

// Security checks for forms
export const performSecurityChecks = {
  checkFormIntegrity: (formData: Record<string, any>): boolean => {
    // Check for suspicious patterns
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /data:text\/html/i,
      /vbscript:/i
    ];
    
    for (const [key, value] of Object.entries(formData)) {
      if (typeof value === 'string') {
        if (suspiciousPatterns.some(pattern => pattern.test(value))) {
          logSecurityEvent('suspicious_input_detected', { field: key, value });
          return false;
        }
      }
    }
    
    return true;
  },
  
  validateFormFields: (formData: Record<string, any>, rules: Record<string, any>): Record<string, string> => {
    const errors: Record<string, string> = {};
    
    for (const [field, rule] of Object.entries(rules)) {
      const value = formData[field];
      
      if (rule.required && (!value || value.toString().trim() === '')) {
        errors[field] = `${field} es obligatorio`;
        continue;
      }
      
      if (value && rule.minLength && value.toString().length < rule.minLength) {
        errors[field] = `${field} debe tener al menos ${rule.minLength} caracteres`;
      }
      
      if (value && rule.maxLength && value.toString().length > rule.maxLength) {
        errors[field] = `${field} no puede exceder ${rule.maxLength} caracteres`;
      }
      
      if (value && rule.pattern && !rule.pattern.test(value.toString())) {
        errors[field] = rule.message || `${field} tiene un formato inválido`;
      }
    }
    
    return errors;
  }
};