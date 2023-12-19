import { Route, Routes } from "react-router-dom";
import App from "../pages/Home";
import Login from "../pages/Login";
import PageLayout from "../components/layout/PageLayout";
import Signup from "../pages/Signup";
import { PATHS } from "./constants";
import Blog from "../pages/post/Post";
import { useAppSelector } from "../app/hooks";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../pages/profile/Profile";
import PostDetail from "../pages/post/PostDetail";
import PostCreate from "../pages/post/PostCreate";
import ErrorNotFound from "../pages/ErrorNotFound";
import UpdateProfile from "../pages/profile/UpdateProfile";

const Router = () => {
  const { HOME, LOGIN, SIGNUP, BLOG, PROFILE, POST_CREATE, POST_DETAIL, PROFILE_UPDATE } = PATHS;
  const user = useAppSelector((state) => state.user.user);

  return (
    <Routes>
      <Route element={<ProtectedRoute user={user} />}>
        <Route path={HOME} element={<PageLayout />}>
          <Route index element={<App />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGNUP} element={<Signup />} />
          <Route path={BLOG} element={<Blog />} />
          <Route path={PROFILE} element={<Profile />} />
          <Route path={POST_CREATE} element={<PostCreate />} />
          <Route path={`${POST_DETAIL}:id`} element={<PostDetail />} />
          <Route path={PROFILE_UPDATE} element={<UpdateProfile />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
