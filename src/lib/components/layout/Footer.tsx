import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link
          color="whiteAlpha.300"
          href="https://digitalkitchen.zone"
          isExternal
          rel="noopener noreferrer"
        >
          digitalkitchenlabs.zone
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
