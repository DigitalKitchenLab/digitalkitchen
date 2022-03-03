import { Box } from "@chakra-ui/react";
import SomeText from "lib/components/samples/SomeText";

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column-reverse", md: "column" }}
      alignItems="center"
      minHeight="60vh"
      gap={8}
      mb={8}
      w="full"
    >
      <SomeText />
    </Box>
  );
};

export default Home;
