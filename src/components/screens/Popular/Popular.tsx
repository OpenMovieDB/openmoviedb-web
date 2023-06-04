"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import Filters from "@/components/Filters/Filters";

import { listOfPopular } from "@/src/objects";

const Popular = () => {
  return (
    <>
      <Box className="container" mt="90px">
        <Heading>Популярное</Heading>

        <Flex mt="30px" flexWrap="wrap">
          {listOfPopular.map((item, id) => {
            return (
              <Box key={id} style={{ marginRight: "30px", marginTop: "30px" }}>
                <MovieCard item={item} />
              </Box>
            );
          })}
        </Flex>
        <Filters />
      </Box>
    </>
  );
};

export default Popular;
