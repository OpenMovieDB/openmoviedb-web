import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Comments } from "@/components/Comments/Comments";

export const CommentsSection = () => {
  return (
    <Box>
      <Text fontSize="40px" fontWeight="800" lineHeight="41px">
        Отзывы
      </Text>
      <Box mt="30px">
        <Comments />
      </Box>
    </Box>
  );
};
