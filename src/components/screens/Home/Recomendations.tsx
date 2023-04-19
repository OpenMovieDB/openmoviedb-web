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

const Recomendations = () => {
  return (
    <Carousel title="Рекомендации" className="container">
      {recomendationsList.map((item, id) => (
        <SwiperSlide
          key={id}
          style={{ minWidth: "400px", marginRight: "30px" }}
        >
          <Box
            background={`linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${rectangle.src})`}
            borderRadius={15}
            w="405px"
          >
            <div className="flex items-center content-center gap-2">
              <Image src={item.image} alt="" />

              <div className="justify-left flex flex-col gap-2.5 p-6 whitespace-nowrap">
                <div>
                  <b>{item.title}</b>
                </div>
                <div>{item.type}</div>
              </div>
            </div>
          </Box>
        </SwiperSlide>
      ))}
    </Carousel>
  );
};

export default Recomendations;
