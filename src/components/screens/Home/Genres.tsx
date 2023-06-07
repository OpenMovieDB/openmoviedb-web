"use client";

import { Box, Heading } from "@chakra-ui/react";
import { Slider } from "@/components/Slider/Slider";

import { genresList } from "@/src/objects";
import { GenresCard } from "@/components/GenresCard/GenresCard";

const Genres = () => {
  return (
    <Box mt="150px" className="container">
      <Box mt="25px">
        <Slider isWheel titleMargin={60} arrowMargin={20} title="Жанры">
          {genresList.map((item, id) => (
            <Box key={id} mr="30px">
              <GenresCard item={item} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Genres;
