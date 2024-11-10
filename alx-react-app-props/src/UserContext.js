// src/UserContext.js
import React, { createContext } from 'react';

// Create Context
export const UserContext = createContext();

// Export Context Provider
export const UserProvider = ({ children, userData }) => {
  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};
