"use client";

import { SwiperSlide } from "swiper/react";
import { Carousel } from "@/components/Carousel/Carousel";
import { Flex, Box, Text, Center, Image } from "@chakra-ui/react";

import image1 from "@/public/Novelties/main-poster-0.png";
import image2 from "@/public/Novelties/main-poster-1.png";
import image3 from "@/public/Novelties/main-poster-2.png";
import image4 from "@/public/Novelties/main-poster-3.png";
import Rating from "@/components/Rating/Rating";

const Novelties = () => {
  const listOfNovelties = [
    {
      image: image1.src,
      title: "История игрушек 4",
      rating: 7.1,
      url: "1",
    },
    {
      image: image2.src,
      title: "Тайная жизнь домашних животных 2",
      rating: 7.1,
      url: "2",
    },
    {
      image: image3.src,
      title: "Люди в чёрном: Интернэшнл",
      rating: 7.1,
      url: "3",
    },
    {
      image: image4.src,
      title: "Люди икс: Тёмный феникс",
      rating: 7.1,
      url: "4",
    },
    {
      image: image1.src,
      title: "История игрушек 4",
      rating: 7.1,
      url: "1",
    },
    {
      image: image2.src,
      title: "Тайная жизнь домашних животных 2",
      rating: 7.1,
      url: "2",
    },
    {
      image: image3.src,
      title: "Люди в чёрном: Интернэшнл",
      rating: 7.1,
      url: "3",
    },
    {
      image: image4.src,
      title: "Люди икс: Тёмный феникс",
      rating: 7.1,
      url: "4",
    },
  ];

  return (
    <Carousel title="Новинки кино" className="mt-96">
      {listOfNovelties.map((item, id) => {
        return (
          <SwiperSlide
            key={id}
            style={{
              width: "405px",
              height: "216px",
              padding: "20px",
              borderRadius: "15px",
              background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(${item.image})`,
              objectFit: "contain",
              backgroundSize: "cover",
            }}
          >
            <Rating rating={item.rating} />
            <Text
              position="absolute"
              bottom="20px"
              left="20px"
              fontSize="14px"
              fontWeight="800"
              lineHeight="14px"
            >
              {item.title}
            </Text>
          </SwiperSlide>
        );
      })}
    </Carousel>
  );
};

export default Novelties;
