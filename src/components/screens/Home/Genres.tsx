"use client";

import { CarouselTopOfMonth } from "@/components/CarouselTopOfMonth/CarouselTopOfMonth";

import { Flex, Box, Text, Image } from "@chakra-ui/react";

import ghost from "@/assets/emojis/ghost.png";
import alien from "@/assets/emojis/alien.png";
import kiss from "@/assets/emojis/kiss.png";
import mage from "@/assets/emojis/mage.png";
import sad from "@/assets/emojis/sad.png";
import laugh from "@/assets/emojis/laugh.png";
import wink from "@/assets/emojis/wink.png";

const genresList = [
  {
    icon: laugh.src,
    type: "Комедии",
  },
  {
    icon: ghost.src,
    type: "Ужасы",
  },
  {
    icon: alien.src,
    type: "Фантастика",
  },
  {
    icon: kiss.src,
    type: "Мелодрамы",
  },
  {
    icon: sad.src,
    type: "Драмы",
  },
  {
    icon: mage.src,
    type: "Фэнтези",
  },
  {
    icon: laugh.src,
    type: "Комедии",
  },
  {
    icon: ghost.src,
    type: "Ужасы",
  },
  {
    icon: alien.src,
    type: "Фантастика",
  },
  {
    icon: kiss.src,
    type: "Мелодрамы",
  },
  {
    icon: sad.src,
    type: "Драмы",
  },
  {
    icon: mage.src,
    type: "Фэнтези",
  },
];

const Genres = () => {
  return (
    <Box className="container mt-96">
      <CarouselTopOfMonth
        isWheel
        marginTop={10}
        titleMargin={60}
        arrowMargin={20}
        title="Жанры"
      >
        {genresList.map((item, id) => (
          <Box>
            <Flex
              key={id}
              borderRadius="15px"
              bgColor="rgba(255, 255, 255, 0.05)"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              height={{ xl: "260px", md: "207px" }}
              width={{ xl: "260px", md: "207px" }}
              mr="90px"
            >
              <Image src={item.icon} alt="" />
              <Text>{item.type}</Text>
            </Flex>
          </Box>
        ))}
      </CarouselTopOfMonth>
    </Box>
  );
};

export default Genres;
