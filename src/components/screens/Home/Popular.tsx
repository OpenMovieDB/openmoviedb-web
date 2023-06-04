"use client";

import { MovieCard } from "@/components/MovieCard/MovieCard";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import rightArrow from "@/public/right.png";

import { MovieCardEmpty } from "@/components/MovieCardEmpty/MovieCardEmpty";
import { listOfPopular } from "@/src/objects";

const Popular = () => {
  return (
    <Box className="container" mt="150px">
      <Heading>Популярное</Heading>

      <Flex
        mt="30px"
        flexWrap="wrap"
        gap="30px"
        alignItems="center"
        justifyContent="left"
      >
        {listOfPopular.slice(0, 7).map((item, id) => {
          return (
            <Box key={id}>
              <MovieCard item={item} />
            </Box>
          );
        })}

        <Box>
          <MovieCardEmpty>
            <Flex
              flexDirection="column"
              justifyContent="left"
              alignItems="center"
            >
              <Box w="26px" h="52px" color="#898990" mb="25px">
                <Image src={rightArrow.src} alt="" />
              </Box>
              <Text
                fontSize="14px"
                fontWeight="800"
                lineHeight="14px"
                color="#898990"
              >
                Показать ещё
              </Text>
            </Flex>
          </MovieCardEmpty>
        </Box>
      </Flex>
    </Box>
  );
};

export default Popular;
