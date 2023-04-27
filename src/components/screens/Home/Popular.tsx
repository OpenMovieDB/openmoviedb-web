"use client";

import { Carousel } from "@/components/Carousel/Carousel";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";

import image1 from "@/public/Popular/1.jpeg";
import image2 from "@/public/Popular/2.jpeg";
import image3 from "@/public/Popular/3.jpeg";
import image4 from "@/public/Popular/4.jpeg";
import image5 from "@/public/Popular/5.jpeg";
import image6 from "@/public/Popular/6.jpeg";
import image7 from "@/public/Popular/7.jpeg";
import { MovieCardEmpty } from "@/components/MovieCardEmpty/MovieCardEmpty";

const listOfPopular = [
  {
    id: 1,
    image: image1.src,
    title: "За мечтой",
    rating: 7.1,
    url: "1",
  },
  {
    id: 2,
    image: image2.src,
    title: "Зов волка",
    rating: 7.1,
    url: "2",
  },
  {
    id: 3,
    image: image3.src,
    title: "Тайная жизнь домашних животных 2",
    rating: 7.1,
    url: "3",
  },
  {
    id: 4,
    image: image4.src,
    title: "Люди в чёрном: Интернэшнл",
    rating: 7.1,
    url: "4",
  },
  {
    id: 5,
    image: image5.src,
    title: "Люди икс: Тёмный феникс",
    rating: 7.1,
    url: "1",
  },
  {
    id: 6,
    image: image6.src,
    title: "Детские игры",
    rating: 7.1,
    url: "2",
  },
  {
    id: 7,
    image: image7.src,
    title: "Аладин",
    rating: 7.1,
    url: "3",
  },
  {
    id: 8,
    image: image7.src,
    title: "Люди икс: Тёмный феникс",
    rating: 7.1,
    url: "4",
  },
];

const seeAll = [
  {
    id: 9,
    image: image7.src,
    title: "Люди икс: Тёмный феникс",
    rating: 7.1,
    url: "4",
  },
];

const Popular = () => {
  return (
    <Box className="container" mt="150px">
      <Heading>Популярное</Heading>

      <Flex
        mt="30px"
        ml="-35px"
        flexWrap="wrap"
        gap="30px"
        className="container"
      >
        {listOfPopular.slice(0, 7).map((item, id) => {
          return (
            <Box
              key={id}
              style={{
                width: "calc(25% - 40px)",
                minWidth: "300px",
                height: "216px",
                padding: "20px",
                borderRadius: "15px",
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(${item.image})`,
                objectFit: "contain",
                backgroundSize: "cover",
              }}
            >
              <MovieCard item={item} />
            </Box>
          );
        })}
        <Box>
          <MovieCardEmpty title="Показать всё" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Popular;
