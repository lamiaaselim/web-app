import { Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the token from localStorage
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        // Decode the JWT token
        const decodedToken = jwtDecode(token);
        console.log("Decoded Token:", decodedToken);

        // Check if the user is an admin based on the `isAdmin` field
        if (decodedToken.isAdmin) {
          setIsAuthenticated(true);
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Invalid token", error);
      }
    } else {
      console.log("No token found in localStorage");
    }

    // Set loading to false after validation
    setLoading(false);
  }, []);

  // Show a loading spinner or placeholder while checking authentication
  if (loading) {
    return <div>Loading...</div>;
  }

  // If the user is not authenticated or not an admin, redirect to login page
  if (!isAuthenticated || !isAdmin) {
    console.log("Redirecting to login...");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Render the children (protected routes) if authenticated and authorized
  return children;
}

export default ProtectedRoute;
