"use client";

import { Box } from "@chakra-ui/react";

import { HeroFilmSection } from "./sections/HeroFilmSection/HeroFilmSection";
import { BigRatingSection } from "./sections/BigRatingSection/BigRatingSection";
import { SeasonsAndSeriesSection } from "./sections/SeasonsAndSeriesSection/SeasonsAndSeriesSection";

import { currentFilm } from "@/src/objects";
import { ActorsSection } from "./sections/ActorsSection/ActorsSection";
import { FactsSection } from "./sections/FactsSection/FactsSection";
import { SimilarMovies } from "./sections/SimilarMovies/SimilarMovies";
import { CommentsSection } from "./sections/CommentsSection/CommentsSection";

const Film = () => {
  return (
    <Box>
      <HeroFilmSection item={currentFilm} />

      <Box className="container">
        <BigRatingSection ratings={currentFilm.ratings} />
        <Box mt="70">
          <SeasonsAndSeriesSection />
        </Box>
        <Box mt="150px">
          <ActorsSection />
        </Box>
        <Box mt="150px">
          <FactsSection />
        </Box>
        <Box mt="150px">
          <SimilarMovies />
        </Box>
        <Box mt="150px">
          <CommentsSection />
        </Box>
      </Box>
    </Box>
  );
};

export default Film;
