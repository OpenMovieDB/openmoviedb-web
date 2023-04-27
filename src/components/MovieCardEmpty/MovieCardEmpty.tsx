import { Box, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import Rating from "../Rating/Rating";

interface MovieCardEmptyProps {
  text?: string;
  icon?: string;
  props?: ReactNode;
}

export const MovieCardEmpty: FC<MovieCardEmptyProps> = ({
  text,
  icon,
  props,
}) => {
  return (
    <Box {...props} background="rgba(255, 255, 255, 0.05)">
      <Box>
        <Text
          position="relative"
          top="140px"
          left="20px"
          fontSize="14px"
          fontWeight="800"
          lineHeight="14px"
        >
          {text}
        </Text>
      </Box>
    </Box>
  );
};
