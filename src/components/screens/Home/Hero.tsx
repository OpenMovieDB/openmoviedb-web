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
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            pagination={{
                clickable: true,
                renderBullet: function(index, className) {
                    return '<span class="' + className + '">0' + (index + 1) + "</span>";
                },
            }}
        >
            <div className="swiper-wrapper">
                {films.map((item, id) => (
                    <SwiperSlide key={id}>
                        <HeroSection item={item} />
                    </SwiperSlide>
                ))}
            </div>
        </Swiper>
    );
};

export default Hero;
