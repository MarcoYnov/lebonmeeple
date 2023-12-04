import { Flex, Text } from "@chakra-ui/react";
import { PRIMARY_COLOR } from "../../style/chakra-theme";

const Footer = () => {
  return (
      <Flex width="100%" p="20px" justifyContent="space-between">
        <Text fontSize="2xl" color={PRIMARY_COLOR} >Footer</Text>
        <Text fontSize="2xl" color={PRIMARY_COLOR} >Mentions légales</Text>
        <Text fontSize="2xl" color={PRIMARY_COLOR} >Plan du site</Text>
        <Text fontSize="2xl" color={PRIMARY_COLOR} >Contact</Text>
      </Flex>
  );
}

export default Footer;
