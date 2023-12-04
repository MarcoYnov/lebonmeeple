import { Flex, Heading, Show } from "@chakra-ui/react";
import ResponsiveNav from "../nav/ResponsiveNav";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import Avatar from "../Avatar/Avatar";
import Nav from "../nav/Nav";

const Header = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <>
      <Flex
        width="100%"
        shadow="xl"
        p="10px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link to="/">
          <Heading as="h1" color="#bd3a6a">
            Lebonmeeple<span style={{ fontSize: "16px" }}>.com</span>
          </Heading>
        </Link>
        <Show above="md">
          <Nav />
        </Show>
        <Show below="md">{user && <Avatar user={user} />}</Show>
        <Show below="md">
          <ResponsiveNav />
        </Show>
      </Flex>
    </>
  );
};

export default Header;
