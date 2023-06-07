"use client";

import { BigCarousel } from "@/components/BigCarousel/BigCarousel";
import { listOfNovelties } from "@/src/objects";
import { Box } from "@chakra-ui/react";

const Novelties = () => {
  return (
    <Box className="container">
      <BigCarousel title="Новинки кино" data={listOfNovelties} />
    </Box>
  );
};

export default Novelties;
