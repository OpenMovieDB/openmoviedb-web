import { Box, Flex, Text, Image } from "@chakra-ui/react";

// TODO: wirte types
export const SeriesCard = ({ item }: any) => {
  const { index, image, title, date }: any = { ...item };

  return (
    <Box mr="30px" cursor="pointer">
      <Flex
        position="relative"
        borderRadius="15px"
        bgColor="rgba(255, 255, 255, 0.05)"
        width={{ xl: "550px", md: "440px", base: "388px" }}
        height={{ xl: "177px", md: "144px", base: "125px" }}
      >
        <Image
          src={image.src}
          alt=""
          width={{ xl: "240px", md: "190px", base: "171px" }}
          height={{ xl: "140px", md: "104px", base: "105px" }}
          m={{
            xl: "20px 10px 20px 20px",
            md: "20px 10px 20px 20px",
            base: "10px 5px 10px 10px",
          }}
        />
        <Box
          m={{
            xl: "20px 20px 20px 10px",
            md: "20px 20px 20px 10px",
            base: "10px 10px 10px 5px",
          }}
        >
          <Text
            fontWeight="400"
            fontSize="14px"
            lineHeight="140%"
            fontStyle="normal"
            color="rgba(255, 255, 255, 0.5)"
            mb="15px"
          >
            {index}
          </Text>
          <Text
            fontWeight="800"
            fontSize="14px"
            lineHeight="17px"
            fontStyle="normal"
          >
            {title}
          </Text>
          <Text
            fontWeight="400"
            fontSize="14px"
            lineHeight="140%"
            fontStyle="normal"
            color="rgba(255, 255, 255, 0.5)"
            mt="15px"
          >
            {date}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
