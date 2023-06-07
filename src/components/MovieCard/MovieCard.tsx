import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import Rating from "../Rating/Rating";

import { MovieCardProps } from "@/types/IMovieCardProps";

export const MovieCard: FC<MovieCardProps> = ({ item, onClick, ...props }) => {
  const { image, rating, title } = item;

  return (
    <Box
      width={{ xl: "405px", md: "325px", base: "328px", sm: "252px" }}
      height={{ xl: "216px", md: "183px", base: "175px", sm: "134px" }}
      minWidth="252px"
      minHeight="134px"
      padding="20px"
      borderRadius="15px"
      background={`linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(${image})`}
      objectFit="contain"
      backgroundSize="cover"
      {...props}
    >
      <Rating rating={rating} hasBg={true} />
      <Text marginTop="36%" fontSize="14px" fontWeight="800" lineHeight="17px">
        {title}
      </Text>
    </Box>
  );
};
