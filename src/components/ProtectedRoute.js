import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/admin/authentication" />;
  } else if (user) {
    return children;
  }
};

export default ProtectedRoute;
