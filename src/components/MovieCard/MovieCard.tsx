import { Box, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import Rating from "../Rating/Rating";

import { MovieCardProps } from "./types/IMovieCardProps";

export const MovieCard: FC<MovieCardProps> = ({ item, props }) => {
  const { image, rating, title } = { ...item };

  return (
    <Box {...props}>
      <Box>
        <Rating rating={rating} />
        <Text
          position="relative"
          top="140px"
          left="20px"
          fontSize="14px"
          fontWeight="800"
          lineHeight="14px"
        >
          {title}
        </Text>
      </Box>
    </Box>
  );
};
