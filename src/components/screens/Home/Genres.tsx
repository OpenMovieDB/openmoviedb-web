"use client";

import { Carousel } from "@/components/Carousel/Carousel";
import { SwiperSlide } from "swiper/react";

import cover1 from "@/public/Recomendations/cover1.png";
import cover2 from "@/public/Recomendations/cover2.png";
import cover3 from "@/public/Recomendations/cover3.png";
import cover4 from "@/public/Recomendations/cover4.png";

import { Flex, Box, Image } from "@chakra-ui/react";
import Img from "@/components/Img/Img";
import rectangle from "@/public/rectangle.png";

const recomendationsList = [
  {
    image: cover1.src,
    title: "История игрушек 4",
    type: "Мультфильм",
  },
  {
    image: cover2.src,
    title: "Очень странные дела",
    type: "Мультфильм",
  },
  {
    image: cover3.src,
    title: "К звёздам",
    type: "Фильм",
  },
  {
    image: cover4.src,
    title: "Она",
    type: "Фильм",
  },
  {
    image: cover1.src,
    title: "История игрушек 4",
    type: "Мультфильм",
  },
  {
    image: cover2.src,
    title: "Очень странные дела",
    type: "Мультфильм",
  },
  {
    image: cover3.src,
    title: "К звёздам",
    type: "Фильм",
  },
  {
    image: cover4.src,
    title: "Она",
    type: "Фильм",
  },
];

const Genres = () => {
  return (
    <Carousel title="Рекомендации" className="container">
      {recomendationsList.map((item, id) => (
        <SwiperSlide
          key={id}
          style={{ minWidth: "260px", minHeight: "260px", marginRight: "30px" }}
        ></SwiperSlide>
      ))}
    </Carousel>
  );
};

export default Genres;
