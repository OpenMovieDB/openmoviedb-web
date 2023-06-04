import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

import { MovieCardEmptyProps } from "./types/IMovieCardEmptyProps";

export const MovieCardEmpty: FC<MovieCardEmptyProps> = ({
  children,
  ...props
}) => {
  return (
    <Box
      width={{ xl: "405px", md: "325px", base: "328px", sm: "252px" }}
      height={{ xl: "216px", md: "183px", base: "175px", sm: "134px" }}
      minWidth="252px"
      minHeight="134px"
      padding="20px"
      borderRadius="15px"
      bg="gray.700"
      objectFit="contain"
      backgroundSize="cover"
    >
      <Flex justifyContent="center" alignItems="center">
        <Text mt="12%" fontSize="14px" fontWeight="800" lineHeight="14px">
          {children}
        </Text>
      </Flex>
    </Box>
  );
};
