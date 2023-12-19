import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { initialUser } from "../../app/userSlice";
import { ToastContainer } from "react-toastify";

const PageLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userItem = localStorage.getItem("user");
    const userToken = localStorage.getItem("jwtToken");
    if (userItem) {
      const user = JSON.parse(userItem);
      dispatch(initialUser({user, userToken}));
    }
  }, [dispatch]);

  return (
    <Flex direction="column" minHeight="100vh" position="relative">
      <Header />
      <Flex
        flex="1"
        direction="column"
        justifyContent="center"
        w="90%"
        margin="auto"
      >
        <Outlet />
      </Flex>
      <ToastContainer />
      <Footer />
    </Flex>
  );
};

export default PageLayout;
