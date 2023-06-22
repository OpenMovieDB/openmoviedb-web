"use client";

import { Flex, Box, Spacer, Text, Link, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex height="17vh" className="container">
      <Flex mt="10vh">
        <Text
          fontWeight="400"
          fontSize="12px"
          lineHeight="12px"
          color="rgba(255, 255, 255, 0.5)"
        >
          Эмодзи предоставлены Joypixels
        </Text>
      </Flex>

      <Spacer />

      <Flex mt="10vh">
        <Link href="#" mr="20px">
          <Text fontWeight="400" fontSize="12px" lineHeight="12px">
            Правообладателям
          </Text>
        </Link>
        <Link href="#">
          <Text fontWeight="400" fontSize="12px" lineHeight="12px">
            Обратная связь
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
