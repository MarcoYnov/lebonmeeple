import { Box, Image } from "@chakra-ui/react";
import { IUser } from "../../types/user";

interface Props {
  user: IUser;
}

const Avatar = ({ user }: Props) => {
  return (
    <Box h="50px" w="50px" borderRadius="50%" overflow="hidden">
      <Image
        src={user.avatar ? user.avatar : "./public/defaultAvatar.jpg"}
        alt="Avatar"
        height="100%"
      />
    </Box>
  );
};

export default Avatar;
