"use client";

import { FC, PropsWithChildren, useRef, useState } from "react";

import Rating from "@/components/Rating/Rating";
import { SliderBtn } from "@/UI/SliderBtn/SliderBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass, { Navigation } from "swiper";
import "swiper/css";

import preview from "@/public/preview.jpeg";

import { Box, Flex, Heading, useBreakpointValue, Text } from "@chakra-ui/react";
import { Genres } from "@/components/Genres/Genres";

const swiperBreakpoints = {
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

// TODO: Write interface for BigCarousel data
interface CarouselProps {
  title?: string;
  className?: string;
  data: any;
}

export const BigCarousel: FC<PropsWithChildren<CarouselProps>> = ({
  className,
  children,
  title,
  data,
}) => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [activeItem, setActiveItem] = useState(data[activeIndex]);
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const isSmallScreen = useBreakpointValue({ sm: true, md: false });

  const swiperNavigation = {
    prevEl: navigationPrevRef.current,
    nextEl: navigationNextRef.current,
  };

  const onSwiper = (swiper: SwiperClass) => {
    setTimeout(() => {
      // @ts-ignore
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      // @ts-ignore
      swiper.params.navigation.nextEl = navigationNextRef.current;

      // Re-init navigation
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    });
  };

  const swiperParams = {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 15,
    navigation: swiperNavigation,
    onSwiper: onSwiper,
    breakpoints: swiperBreakpoints,
  };

  return (
    <Box className={className}>
      <Heading mb="70px" className="container">
        {title}
      </Heading>

      <Flex alignItems="center">
        {!isSmallScreen && <SliderBtn dir="left" ref={navigationPrevRef} />}
        <Swiper modules={[Navigation]} {...swiperParams}>
          {data.map((item, id) => (
            <SwiperSlide
              key={id}
              onClick={() => {
                setActiveIndex(id);
                setActiveItem(item);
              }}
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
              <Box>
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
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        {!isSmallScreen && <SliderBtn dir="left" ref={navigationPrevRef} />}
      </Flex>

      <Flex
        bg="rgba(0, 0, 0, 0.4)"
        mt="30px"
        borderRadius="15px"
        className="container"
        width="1710px"
        height="749px"
      >
        <Box w="782px" h="547px" ml="50px" mt="220px" zIndex="5">
          <Flex flexDirection="column" alignItems="flex-start">
            <Flex mb="80px">
              <Genres data={activeItem} />
            </Flex>
            <Heading
              mb="30px"
              fontWeight="800"
              fontSize="40px"
              lineHeight="41px"
            >
              {activeItem.title}
            </Heading>
            <Box
              fontStyle="normal"
              fontWeight="400"
              fontSize="18px"
              lineHeight="150%"
            >
              {activeItem.description}
            </Box>
          </Flex>
        </Box>

        <Flex
          bg={`linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 18.96%), url(${preview.src})`}
          w="1274px"
          h="749px"
          position="relative"
          objectFit="contain"
          backgroundSize="cover"
          alignItems="flex-end"
        ></Flex>
      </Flex>

      <Flex alignItems="center" mt="30px">
        {!isSmallScreen && <SliderBtn dir="left" ref={navigationPrevRef} />}
        <Swiper modules={[Navigation]} {...swiperParams}>
          {data.map((item, id) => (
            <SwiperSlide
              key={id}
              onClick={() => {
                setActiveIndex(id);
                setActiveItem(item);
              }}
              style={{
                width: "405px",
                height: "216px",
                padding: "20px",
                borderRadius: "15px",
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%),  url(${item.image})`,
                objectFit: "contain",
                backgroundSize: "cover",
              }}
            >
              <Box>
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
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        {!isSmallScreen && <SliderBtn dir="right" ref={navigationPrevRef} />}
      </Flex>
    </Box>
  );
};
