import { Flex, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { PRIMARY_COLOR } from "../../style/chakra-theme";
import {
  AiOutlineLaptop,
  AiOutlineLogin,
  AiOutlineHome,
  AiOutlineAudit,
  AiOutlinePoweroff,
  AiOutlineSetting,
} from "react-icons/ai";
import { PATHS } from "../../router/constants";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../app/userSlice";
import { notifySuccess } from "../../utils/toaster";

function ResponsiveNav() {
  const { LOGIN, SIGNUP, HOME, BLOG, PROFILE } = PATHS;
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  return (
    <Flex
      position="fixed"
      left="0"
      bottom="0"
      w="100%"
      zIndex="3000"
      backgroundColor={PRIMARY_COLOR}
      color="white"
      padding="10px"
    >
      <UnorderedList
        styleType="None"
        display="flex"
        w="90%"
        m="auto"
        justifyContent="space-between"
      >
        <ListItem>
          <NavLink to={HOME}>
            <Flex direction="column" alignItems="center">
              <AiOutlineHome fontSize="20px" />
              <Text fontWeight="bold" color="white">
                Accueil
              </Text>
            </Flex>
          </NavLink>
        </ListItem>
        {!user ? (
          <>
            <ListItem>
              <NavLink to={LOGIN}>
                <Flex direction="column" alignItems="center">
                  <AiOutlineLogin fontSize="20px" />
                  <Text fontWeight="bold" color="white">
                    Connexion
                  </Text>
                </Flex>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={SIGNUP}>
                <Flex direction="column" alignItems="center">
                  <AiOutlineLaptop fontSize="20px" />
                  <Text fontWeight="bold" color="white">
                    Inscription
                  </Text>
                </Flex>
              </NavLink>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem>
              <NavLink className={({isActive}) => isActive ? "active" : ""} to={BLOG}>
                <Flex direction="column" alignItems="center">
                  <AiOutlineAudit fontSize="20px" />
                  <Text fontWeight="bold" color="white">
                    Blog
                  </Text>
                </Flex>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={PROFILE}>
                <Flex direction="column" alignItems="center">
                  <AiOutlineSetting fontSize="20px" />
                  <Text fontWeight="bold" color="white">
                    Profil
                  </Text>
                </Flex>
              </NavLink>
            </ListItem>
            <ListItem cursor="pointer" onClick={() => {
              dispatch(logout());
              notifySuccess("Déconnexion réussie")
            }}>
              <Flex direction="column" alignItems="center">
                <AiOutlinePoweroff fontSize="20px" />
                <Text fontWeight="bold" color="white">
                  Logout
                </Text>
              </Flex>
            </ListItem>
          </>
        )}
      </UnorderedList>
    </Flex>
  );
}

export default ResponsiveNav;
