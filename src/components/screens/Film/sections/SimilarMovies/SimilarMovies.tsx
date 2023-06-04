import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { Slider } from "@/components/Slider/Slider";

import { listOfPopular } from "@/src/objects";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import rectangle from "@/public/rectangle.png";

export const SimilarMovies = () => {
  return (
    <Box className="container" alignItems="center">
      <Text fontSize="40px" fontWeight="800" lineHeight="41px">
        Похожие:
      </Text>

      <Slider
        isWheel
        marginTop={10}
        titleMargin={60}
        arrowMargin={20}
        title=" "
      >
        {listOfPopular.map((item, id) => {
          return (
            <Box key={id} style={{ marginRight: "30px" }}>
              <MovieCard item={item} />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};
