import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate } from "react-router-dom";

interface IRequireAuth {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: IRequireAuth) => {
  const { user } = useAuth0();
  return user ? children : <Navigate to="/home" replace />;
};
