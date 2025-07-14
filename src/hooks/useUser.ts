import { useState, useEffect } from "react";

interface User {
  name: string;
  email: string;
  isVerified: boolean;
  registrationDate: Date;
}

export function useUser() {
  const [user, setUser] = useState<User>({
    name: "Santiago L.",
    email: "santiago@example.com",
    isVerified: false,
    registrationDate: new Date("2024-01-01")
  });

  const updateUser = (updates: Partial<User>) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const getUserDisplayName = () => {
    return user.name;
  };

  return {
    user,
    updateUser,
    getUserDisplayName
  };
}