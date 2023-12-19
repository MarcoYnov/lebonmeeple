import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { PRIMARY_COLOR } from "../../style/chakra-theme";
import { PATHS } from "../../router/constants";
import { Flex } from "@chakra-ui/react";
import PostCard from "../../components/card/PostCard";
import { useGetPostsQuery } from "../../api/postSlice";
import Loader from "../../components/Loader/Loader";

const Post = () => {
  const { POST_CREATE } = PATHS;
  const { data: posts, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Flex width="100%" direction="column">
      <Flex justifyContent="flex-end" m="10px">
        <Link to={POST_CREATE}>
          <Button color={PRIMARY_COLOR} type="submit">
            Créer un article
          </Button>
        </Link>
      </Flex>
      <Flex flexWrap="wrap" justifyContent={{md:"flex-start"}} direction={{base:"column", md:"row"}}>
          {posts?.map((element) => (
            <PostCard key={element.postId} post={element} />
          ))}
      </Flex>
    </Flex>
  );
};

export default Post;
