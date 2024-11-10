// src/UserContext.js
import React, { createContext } from 'react';

// Step 1: Create a context for the user data
export const UserContext = createContext();

// Step 2: Create a provider component
export const UserProvider = ({ children, userData }) => {
  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};
