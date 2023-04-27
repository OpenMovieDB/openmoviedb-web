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
    <Box
      style={{
        width: "calc(25% - 40px)",
        minWidth: "300px",
        height: "216px",
        padding: "20px",
        borderRadius: "15px",
        objectFit: "contain",
        backgroundSize: "cover",
      }}
      {...props}
      bg="gray.700"
    >
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
  );
};
