"use client";

import { CarouselTopOfMonth } from "@/components/CarouselTopOfMonth/CarouselTopOfMonth";

import cover1 from "@/public/Recomendations/cover1.png";
import cover2 from "@/public/Recomendations/cover2.png";
import cover3 from "@/public/Recomendations/cover3.png";
import cover4 from "@/public/Recomendations/cover4.png";

import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
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
  const isSmallScreen = useBreakpointValue({ sm: true, md: false });

  return (
    <Box className="container">
      <CarouselTopOfMonth
        isWheel
        marginTop={10}
        titleMargin={60}
        arrowMargin={20}
        title="Жанры"
      >
        {recomendationsList.map((item, id) => (
          <Box key={id} mr="30px" minWidth="405px">
            <Box
              background={`linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${rectangle.src})`}
              borderRadius={15}
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
          </Box>
        ))}
      </CarouselTopOfMonth>
    </Box>
  );
};

export default Recomendations;
