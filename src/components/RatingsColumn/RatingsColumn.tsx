import { Flex, Text } from "@chakra-ui/react";

import { IRatingsColumn } from "@/types/IRatingsColumn";

export const RatingsColumn = ({ ratings, props }: IRatingsColumn) => {
  return (
    <>
      {ratings?.map((rating) => (
        <Flex key={rating.service} flexDirection="column" alignItems="center">
          <Text fontSize="36px" fontWeight="800" lineHeight="37px">
            {rating.rating}
          </Text>
          <Text fontSize="18px" lineHeight="27px">
            {rating.service}
          </Text>
        </Flex>
      ))}
    </>
  );
};
