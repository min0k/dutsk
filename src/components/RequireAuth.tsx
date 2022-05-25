import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { IRequireAuth } from "../ts/Interfaces";

export const RequireAuth = ({ children }: IRequireAuth) => {
  const { user } = useAuth0();
  return user ? children : <Navigate to="/" replace />;
};
