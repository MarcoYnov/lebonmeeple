import { Box, Flex, Heading} from "@chakra-ui/react";
import HomeCard from "../components/card/HomeCard";
import { homeData } from "../data/homeData";

const App = () => {
  return (
    <>
      <Flex w="90%" m="auto" direction="column" p="10px 0">
        <Box>
          <Heading fontSize="4xl" p="30px 0">
            Le blog des pros des jeux de société.
          </Heading>
          <Flex direction={{base: "column", md: "row"}} flexWrap={{base:"wrap"}} justifyContent={{md: "space-between"}}>
            {homeData.map((element, index) => (
              <HomeCard key={index} text={element.text} image={element.image} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default App;
