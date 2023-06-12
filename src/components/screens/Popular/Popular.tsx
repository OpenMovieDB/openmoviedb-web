"use client";

import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import Filters from "@/components/Filters/Filters";

import { listOfPopular } from "@/src/objects";

const Popular = () => {
  return (
    <>
      <Box className="container" mt="90px">
        <Heading fontWeight="800" fontSize="40px" lineHeight="41px">
          Популярное
        </Heading>

        <Flex mt="70px" gap="30px" flexWrap="wrap">
          {listOfPopular.map((item, id) => {
            return <MovieCard key={id} item={item} />;
          })}
        </Flex>
        <Filters />
      </Box>
    </>
  );
};

export default Popular;
