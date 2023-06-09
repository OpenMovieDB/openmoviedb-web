"use client";

import { FC, PropsWithChildren, useRef } from "react";

import { Swiper } from "swiper/react";
import SwiperClass, { Navigation } from "swiper";
import "swiper/css";

import { Box, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import { SliderBtn } from "@/UI/SliderBtn/SliderBtn";

import { CarouselProps } from "@/types/ICarouselProps";

const breakpoints = {
  577: {
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 15,
  },
  769: {
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1025: {
    slidesPerGroup: 4,
    slidesPerView: 4,
    spaceBetween: 30,
  },
  1200: {
    slidesPerGroup: 4,
    slidesPerView: 4,
    spaceBetween: 30,
  },
};

export const Carousel: FC<PropsWithChildren<CarouselProps>> = ({
  className,
  children,
  title,
}) => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const isSmallScreen = useBreakpointValue({ sm: true, md: false });

  const navigation = {
    prevEl: navigationPrevRef.current,
    nextEl: navigationNextRef.current,
  };

  return (
    <Box mt="150px" className={`${className}`}>
      <Heading mb="70px" className="container">
        {title}
      </Heading>

      <Flex alignItems="center">
        {!isSmallScreen && <SliderBtn dir="left" ref={navigationPrevRef} />}

        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          slidesPerGroup={2}
          spaceBetween={15}
          navigation={navigation}
          breakpoints={breakpoints}
        >
          {children}
        </Swiper>

        {!isSmallScreen && <SliderBtn dir="right" ref={navigationNextRef} />}
      </Flex>
    </Box>
  );
};
