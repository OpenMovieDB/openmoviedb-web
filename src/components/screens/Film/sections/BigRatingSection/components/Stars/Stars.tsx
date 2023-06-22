import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, HStack } from "@chakra-ui/react";

interface IStars {
  rating: number;
}

export const Stars = ({ rating }: IStars) => {
  const integerRating = Math.floor(rating);
  const decimalRating = rating - integerRating;

  const fullStars = Array.from({ length: integerRating }).map((_, index) => (
    <Box key={index}>
      <StarIcon color="#FFFFFF" boxSize={{ lg: 8, base: 6 }} />
      <Text textAlign="center" fontSize="xs">
        {index + 1}
      </Text>
    </Box>
  ));

  let halfStar;
  if (decimalRating >= 0.5) {
    halfStar = (
      <Box>
        <StarIcon
          viewBox="0 0 24 24"
          color="#FFFFFF"
          boxSize={{ lg: 8, base: 6 }}
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        />
        <Text textAlign="center" fontSize="xs">
          {integerRating + 1}
        </Text>
      </Box>
    );
  }

  const emptyStars = Array.from({
    length: 10 - integerRating - (decimalRating >= 0.5 ? 1 : 0),
  }).map((_, index) => (
    <Box key={index}>
      <StarIcon color="#83838A" boxSize={{ lg: 8, base: 6 }} />
      <Text textAlign="center" fontSize="14px">
        {integerRating + index + (decimalRating >= 0.5 ? 1 : 0) + 1}
      </Text>
    </Box>
  ));

  return (
    <Flex alignItems="center">
      <HStack spacing="10px">
        {fullStars}
        {halfStar}
        {emptyStars}
        {/* <Text fontSize="lg" fontWeight="bold">
							{rating}
							</Text> */}
      </HStack>
    </Flex>
  );
};
