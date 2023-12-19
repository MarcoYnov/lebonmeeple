import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { IUser } from "../types/user";
import { useLocation } from 'react-router-dom';
import { PATHS } from "./constants";

interface Props {
  user: IUser|null;
}

const ProtectedRoute = ({ user }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { BLOG, PROFILE, LOGIN, SIGNUP, HOME, POST_CREATE } = PATHS;

  useEffect(() => {
    if (
      (user === null && location.pathname === BLOG) ||
      (user === null && location.pathname === PROFILE) ||
      (user === null && location.pathname === POST_CREATE)
    ) {
      return navigate(LOGIN);
    }
    if (
      (user && location.pathname === LOGIN) ||
      (user && location.pathname === SIGNUP)
    ) {
      return navigate(HOME);
    }
  }, [
    user,
    navigate,
    BLOG,
    PROFILE,
    LOGIN,
    SIGNUP,
    HOME,
    POST_CREATE,
    location.pathname,
  ]);
  
  return (
    <Outlet />
  );
};

export default ProtectedRoute;
