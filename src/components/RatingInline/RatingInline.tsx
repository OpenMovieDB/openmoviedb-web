import { FC } from "react";
import { Text, Box } from "@chakra-ui/react";

import { RatingInlineProps } from "@/types/IRatingInlineProps";

export const RatingInline = ({ item }: any) => {
  const { rating, service, className }: RatingInlineProps = { ...item };

  return (
    <Box
      fontSize="16px"
      lineHeight="20px"
      className={`mb-10 mt-8 mr-9 uppercase ${className}`}
    >
      <Text>
        <b>{rating}</b> <span>{service}</span>
      </Text>
    </Box>
  );
};
