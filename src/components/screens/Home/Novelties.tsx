"use client";

import { SwiperSlide } from "swiper/react";
import { Carousel } from "@/components/Carousel/Carousel";
import { Flex, Box, Text, Center, Image } from "@chakra-ui/react";

import image1 from "@/public/Novelties/main-poster-0.png";
import image2 from "@/public/Novelties/main-poster-1.png";
import image3 from "@/public/Novelties/main-poster-2.png";
import image4 from "@/public/Novelties/main-poster-3.png";

const Novelties = () => {
  const listOfNovelties = [
    {
      image: image1.src,
      title: "История игрушек 4",
      rating: 7.1,
    },
    {
      image: image2.src,
      title: "Тайная жизнь домашних животных 2",
      rating: 7.1,
    },
    {
      image: image3.src,
      title: "Люди в чёрном: Интернэшнл",
      rating: 7.1,
    },
    {
      image: image4.src,
      title: "Люди икс: Тёмный феникс",
      rating: 7.1,
    },
    {
      image: image1.src,
      title: "История игрушек 4",
      rating: 7.1,
    },
    {
      image: image2.src,
      title: "Тайная жизнь домашних животных 2",
      rating: 7.1,
    },
    {
      image: image3.src,
      title: "Люди в чёрном: Интернэшнл",
      rating: 7.1,
    },
    {
      image: image4.src,
      title: "Люди икс: Тёмный феникс",
      rating: 7.1,
    },
  ];

  return (
    <Carousel title="Новинки кино" className="mt-96">
      {listOfNovelties.map((item, id) => {
        return (
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
            >
              <Image src={item.image} alt="" />
              <Text position="relative">{item.title}</Text>
            </Flex>
          </SwiperSlide>
        );
      })}
    </Carousel>
  );
};

export default Novelties;
