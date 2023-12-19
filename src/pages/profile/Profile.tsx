import { Flex, Heading, Text } from "@chakra-ui/react";
import { useAppSelector } from "../../app/hooks";
import Avatar from '../../components/Avatar/Avatar';
import Button from "../../components/Button/Button";
import { PRIMARY_COLOR } from "../../style/chakra-theme";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/constants";

const Profile = () => {
  const user = useAppSelector((state) => state.user.user);
  const { PROFILE_UPDATE } = PATHS;
  
  return (
    <Flex direction="column" alignItems="center">
      {user && <Avatar user={user} />}
      <Heading>{user?.username}</Heading>
      <Text>{user?.email}</Text>
      <Link to={PROFILE_UPDATE}>
        <Button color={PRIMARY_COLOR} type="submit">
          Modifier le profil
        </Button>
      </Link>
    </Flex>
  );
};

export default Profile;
