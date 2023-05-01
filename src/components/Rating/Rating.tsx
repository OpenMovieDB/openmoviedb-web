import { FC, ReactNode } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Rating: FC<RatingProps> = ({ rating, className, props }) => {
  const ratingOMDB = Number(rating);

  const bgStyle = {
    backgroundColor:
      rating >= 6 ? "#00950F" : rating < 6 ? "#D32F2F" : "#5F5F5F",
    borderRadius: "100px",
    padding: "2px 10px 2px 10px",
  };

  return (
    <Box className={className} {...props}>
      <Flex alignItems="center">
        <Box style={bgStyle} mr={1}>
          <Flex alignItems="center">
            <Text fontSize="sm" fontWeight="bold" color="white">
              {ratingOMDB.toFixed(1)}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Rating;
