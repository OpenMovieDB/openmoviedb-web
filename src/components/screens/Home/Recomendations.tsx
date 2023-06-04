"use client";

import { Box, Image, Heading } from "@chakra-ui/react";
import { Slider } from "@/components/Slider/Slider";
import { recomendationsList } from "@/src/objects";

import rectangle from "@/public/rectangle.png";

const Recomendations = () => {
  return (
    <Box className="container">
      <Heading mb="70px" className="container">
        Жанры
      </Heading>
      <Slider
        isWheel
        marginTop={10}
        titleMargin={60}
        arrowMargin={20}
        title=" "
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
      </Slider>
    </Box>
  );
};

export default Recomendations;
