import {
  Card,
  Heading,
  Image,
  Text,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { IPost } from "../../types/post";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { FaRegTimesCircle } from "react-icons/fa";
import Modal from "../Modal/Modal";
import { useDeletePostMutation } from "../../api/postSlice";


interface Props {
  post: IPost;
}

const PostCard = (props: Props) => {
  const { postId, title, body, user, image } = props.post;
  const userState = useAppSelector((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deletePost] = useDeletePostMutation();

  const handleDeletePost = async () => {
    const { jwtToken } = userState;
    await deletePost({ postId, jwtToken });
  }

  return (
    <Card
      width={{ base: "100%", md: "45%", xl: "30%" }}
      boxShadow="xl"
      m="10px"
      p="10px"
      position="relative"
    >
      {userState.user && userState.user.userId === user.userId && (
        <Box
          top="10px"
          right="10px"
          position="absolute"
          fontSize="2xl"
          color="red"
          onClick={onOpen}
          cursor="pointer"
        >
          <FaRegTimesCircle color="red" />
        </Box>
      )}
      <Link to={`/post/detail/${postId}`}>
        <Heading>{title}</Heading>
        <Image
          w="100%"
          h="200px"
          alt="photo de l'article"
          src={image ? image : "./public/boardgame.jpg"}
        />
        <Text>{body}</Text>
        <Text>De : {user.username}</Text>
      </Link>

      <Modal isOpen={isOpen} onClose={onClose} handleClick={handleDeletePost} />
    </Card>
  );
};

export default PostCard;
