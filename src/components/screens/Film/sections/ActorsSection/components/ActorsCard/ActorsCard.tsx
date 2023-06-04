import { Box, Flex, Text, Image } from "@chakra-ui/react";

// TODO: wirte types
export const ActorsCard = ({ item }: any) => {
  const { image, name }: any = { ...item };

  return (
    <Box
      position="relative"
      borderRadius="15px"
      bgColor="rgba(255, 255, 255, 0.05)"
      width={{ xl: "190px", md: "149px", base: "116px" }}
      height={{ xl: "190px", md: "149px", base: "116px" }}
      mr="30px"
      cursor="pointer"
    >
      <Image src={image.src} alt="" />
      <Text
        mt=" 20px"
        fontWeight="400"
        fontSize="16px"
        lineHeight="150%"
        color="rgba(255, 255, 255, 0.5)"
      >
        {name}
      </Text>
    </Box>
  );
};
