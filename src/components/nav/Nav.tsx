import { Flex, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import Avatar from "../Avatar/Avatar";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../app/userSlice";
import { notifySuccess } from "../../utils/toaster";
import { PRIMARY_COLOR } from "../../style/chakra-theme";

const Nav = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  return (
    <Flex alignItems="center" fontSize="2xl">
      {!user ? (
        <>
          <Box color={PRIMARY_COLOR} m="0 10px">
            <NavLink to="/login">Login</NavLink>
          </Box>
          <Box color={PRIMARY_COLOR} m="0 10px">
            <NavLink to="/signup">Inscription</NavLink>
          </Box>
        </>
      ) : (
        <>
          <Box color={PRIMARY_COLOR} m="0 10px">
            <NavLink to="/blog">Blog</NavLink>
          </Box>
          <Box color={PRIMARY_COLOR} m="0 10px">
            <NavLink to="/profile">Profil</NavLink>
          </Box>
          <Box
            cursor="pointer"
            m="0 10px"
            onClick={() => {
              dispatch(logout());
              notifySuccess("Déconnexion réussie");
            }}
            color={PRIMARY_COLOR}
          >
            Déconnexion
          </Box>
          {user && <Avatar user={user} />}
        </>
      )}
    </Flex>
  );
};

export default Nav;
