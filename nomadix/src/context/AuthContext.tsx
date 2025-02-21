"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getUserId } from "@/lib/actions";

interface AuthContextType {
  userId: string | null;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);

  // Function to refresh user state (called after login/logout)
  const refreshUser = async () => {
    const newUserId = await getUserId();
    setUserId(newUserId);
  };

  // Fetch user on first render
  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider value={{ userId, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
