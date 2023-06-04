"use client";

import { Box, Heading } from "@chakra-ui/react";
import { Slider } from "@/components/Slider/Slider";

import { genresList } from "@/src/objects";
import { GenresCard } from "@/components/GenresCard/GenresCard";

const Genres = () => {
  return (
    <Box className="container mt-96">
      <Heading mb="70px" className="container">
        Жанры
      </Heading>

      <Slider
        isWheel
        marginTop={10}
        titleMargin={60}
        arrowMargin={20}
        title=" "
      >
        {genresList.map((item, id) => (
          <Box key={id} mr="30px">
            <GenresCard item={item} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Genres;
