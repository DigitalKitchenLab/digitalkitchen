import { Heading, Tag, VStack } from "@chakra-ui/react";

const SomeText = () => {
  return (
    <VStack h="full" spacing={2}>
      <Heading as="h1" fontSize={{ base: "3xl", sm: "5xl" }}>
        Hello Cosmos. 👋
      </Heading>
      <Tag variant="subtle" colorScheme="teal" padding={4} borderRadius="xl">
        We are Digital Kitchen. We like cats, coding and crypto. Creators of
        CoolCat!
      </Tag>
    </VStack>
  );
};

export default SomeText;
