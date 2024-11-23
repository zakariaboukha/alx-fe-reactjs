// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Import the custom useAuth hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Get the authentication status

  // If the user is not authenticated, redirect them to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children; // If authenticated, render the children (protected content)
};

export default ProtectedRoute;

