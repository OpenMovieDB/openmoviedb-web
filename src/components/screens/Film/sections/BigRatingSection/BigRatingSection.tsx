import {
  HStack,
  Flex,
  Text,
  useBreakpointValue,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { Stars } from "./components/Stars/Stars";
import { Share } from "./components/Share/Share";

import { RatingsColumn } from "@/components/RatingsColumn/RatingsColumn";
import { IRatingsColumn } from "@/types/IRatingsColumn";

export const BigRatingSection = ({ ratings }: IRatingsColumn) => {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box className="container" alignItems="start">
      <Text fontSize="40px" fontWeight="800" lineHeight="41px">
        Рейтинг сериала:
      </Text>

      {!isSmallScreen && (
        <Flex mt="70px">
          <Box>
            <Stars rating={7} />
          </Box>
          <Spacer />
          <HStack spacing="60px">
            <RatingsColumn ratings={ratings} />
          </HStack>
          <Spacer />
          <Share />
        </Flex>
      )}
      {isSmallScreen && (
        <Box>
          <HStack spacing={4} mt="45px" mb="30px">
            <RatingsColumn ratings={ratings} />
          </HStack>
          <Box mb="50px">
            <Stars rating={7} />
          </Box>
          <Share />
        </Box>
      )}
    </Box>
  );
};
