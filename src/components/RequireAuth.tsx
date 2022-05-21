import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoggedInUserContext } from "../context/LoggedInUserContext";

interface IRequireAuth {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: IRequireAuth) => {
  const { loggedInUser } = useContext(LoggedInUserContext);
  return loggedInUser ? children : <Navigate to="/" replace />;
};
