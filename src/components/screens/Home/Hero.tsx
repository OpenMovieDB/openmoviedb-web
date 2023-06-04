"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import styles from "./Swiper.module.scss";

import { HeroSection } from "@/components/HeroSection/HeroSection";
import { films } from "@/src/objects";

const Hero = () => {
  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      className={styles.mySwiper}
    >
      {films.map((item, id) => (
        <SwiperSlide key={id}>
          <HeroSection item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
