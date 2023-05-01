import { FC, ReactNode } from "react";
import { Text, Box } from "@chakra-ui/react";

import { RatingInlineProps } from "./types/IRatingInlineProps";

export const RatingInline: FC<RatingInlineProps> = ({ item, props }) => {
  const { rating, service } = { ...item };

  return (
    <Box
      fontSize="16px"
      lineHeight="20px"
      className="mb-10 mt-8 mr-9 uppercase"
      {...props}
    >
      <Text>
        <b>{rating}</b> <span>{service}</span>
      </Text>
    </Box>
  );
};
