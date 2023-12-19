import { Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../api/postSlice";

const PostDetail = () => {
    const { id } = useParams();
    const {data: post} = useGetPostByIdQuery(id);

    if (!post) return;
    const { title, user, image, body } = post;

    return (
      <Flex
        w={{ base: "100%", md: "45%" }}
        direction={{ base: "column" }}
        alignItems="center"
        margin="auto"
      >
        <Box>
          <Heading>{title}</Heading>
          <Text>De : {user.username}</Text>
          <Image alt="photo de l'article" src={image} />
          <Text>{body}</Text>
        </Box>
      </Flex>
    );
}

export default PostDetail;