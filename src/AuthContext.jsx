// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";

// 1. Create AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 2. Initialize token state from localStorage (persist login)
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);

  // 3. Whenever token changes, update localStorage accordingly
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  // 4. Login function to set token (called from login page)
  const login = (newToken) => {
    setToken(newToken);
  };

  // 5. Logout function clears the token
  const logout = () => {
    setToken(null);
  };

  // 6. Boolean to check if user is logged in
  const isAuthenticated = !!token;

  // 7. Return context provider with all auth utilities
  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
