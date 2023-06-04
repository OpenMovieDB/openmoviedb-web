import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, HStack } from "@chakra-ui/react";

interface IStars {
  rating: number;
}

export const Stars = ({ rating }: IStars) => {
  const integerRating = Math.floor(rating);
  const decimalRating = rating - integerRating;

  const fullStars = Array.from({ length: integerRating }).map((_, index) => (
    <StarIcon key={index} color="#FFFFFF" boxSize={{ lg: 8, base: 6 }} />
  ));

  let halfStar;
  if (decimalRating >= 0.5) {
    halfStar = (
      <StarIcon
        viewBox="0 0 24 24"
        color="#FFFFFF"
        boxSize={{ lg: 8, base: 6 }}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 17.27l-4.68 2.26a1.31 1.31 0 01-1.9-1.38l.9-4.95L2.6 9.54a1.32 1.32 0 01.74-2.25l5.03-.73L10.24 2a1.32 1.32 0 012.52 0l2.27 4.56 5.04.73a1.32 1.32 0 01.74 2.25l-3.62 3.52.9 4.95a1.33 1.33 0 01-1.9 1.38L12 17.27z" />
      </StarIcon>
    );
  }

  const emptyStars = Array.from({
    length: 10 - integerRating - (decimalRating >= 0.5 ? 1 : 0),
  }).map((_, index) => (
    <StarIcon key={index} color="#83838A" boxSize={{ lg: 8, base: 6 }} />
  ));

  return (
    <Flex alignItems="center">
      <HStack spacing="10px">
        {fullStars}
        {halfStar}
        {emptyStars}
        <Text fontSize="lg" fontWeight="bold">
          {rating}
        </Text>
      </HStack>
    </Flex>
  );
};
