import { Card as ChakraCard, Image, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  image: string;
}

const HomeCard = ({ text, image }: Props) => {
  return (
  <ChakraCard boxShadow="xl" mb="30px" p="10px" width={{base: "100%", md: "45%"}}>
    <Image alt="image jeux de société" src={image} />
    <Text fontSize="xl">{text}</Text>
  </ChakraCard>
  );
};

export default HomeCard;
