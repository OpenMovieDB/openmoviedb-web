"use client";

import { Carousel } from "@/components/Carousel/Carousel";
import { SwiperSlide } from "swiper/react";

import { Flex, Box, Text, Center, Image } from "@chakra-ui/react";
import Img from "@/components/Img/Img";

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
];

const Genres = () => {
  return (
    <Carousel title="Жанры" className="container mt-96">
      {genresList.map((item, id) => (
        <SwiperSlide
          key={id}
          style={{
            marginRight: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Flex
            borderRadius="15px"
            bgColor="rgba(255, 255, 255, 0.05)"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            minHeight={{ base: "260px", sm: "207px" }}
            minWidth={{ base: "260px", sm: "207px" }}
          >
            <Image src={item.icon} alt="" />
            <Text>{item.type}</Text>
          </Flex>
        </SwiperSlide>
      ))}
    </Carousel>
  );
};

export default Genres;
