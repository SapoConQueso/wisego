import { useState, useEffect } from "react";

export interface UserSession {
  isLoggedIn: boolean;
  isGuest: boolean;
  username: string;
  email?: string;
  isPremium: boolean;
  apiKeys: {
    openai?: string;
    deepseek?: string;
  };
}

const DEFAULT_SESSION: UserSession = {
  isLoggedIn: false,
  isGuest: false,
  username: "",
  email: "",
  isPremium: false,
  apiKeys: {}
};

export function useSession() {
  const [userSession, setUserSession] = useState<UserSession>(DEFAULT_SESSION);

  // Load session from localStorage on component mount
  useEffect(() => {
    const savedSession = localStorage.getItem("wisego-session");
    if (savedSession) {
      try {
        const parsedSession = JSON.parse(savedSession);
        setUserSession(parsedSession);
      } catch (error) {
        console.error("Error parsing saved session:", error);
        localStorage.removeItem("wisego-session");
      }
    }
  }, []);

  // Save session to localStorage whenever it changes
  useEffect(() => {
    if (userSession.isLoggedIn || userSession.isGuest) {
      localStorage.setItem("wisego-session", JSON.stringify(userSession));
    } else {
      localStorage.removeItem("wisego-session");
    }
  }, [userSession]);

  const login = (username: string, email: string) => {
    setUserSession({
      ...userSession,
      isLoggedIn: true,
      isGuest: false,
      username,
      email
    });
  };

  const loginAsGuest = () => {
    setUserSession({
      ...userSession,
      isLoggedIn: true,
      isGuest: true,
      username: "Invitado",
      email: ""
    });
  };

  const logout = () => {
    setUserSession(DEFAULT_SESSION);
    localStorage.removeItem("wisego-session");
  };

  const updatePremiumStatus = (isPremium: boolean) => {
    setUserSession(prev => ({
      ...prev,
      isPremium
    }));
  };

  const updateApiKeys = (apiKeys: { openai?: string; deepseek?: string }) => {
    setUserSession(prev => ({
      ...prev,
      apiKeys: {
        ...prev.apiKeys,
        ...apiKeys
      }
    }));
  };

  return {
    userSession,
    login,
    loginAsGuest,
    logout,
    updatePremiumStatus,
    updateApiKeys
  };
}