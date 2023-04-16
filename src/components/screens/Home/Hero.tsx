"use client";

import {
  Box,
  Flex,
  Text,
  Link,
  Wrap,
  WrapItem,
  useBreakpointValue,
  Container,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import styles from "./Swiper.module.scss";

import backgroundImage from "@/public/Hero/HouseOfDragon/slider-bg.png";
import filmTitle from "@/public/Hero/HouseOfDragon/film-logo.png";
import mainCharacter from "@/public/Hero/HouseOfDragon/character.png";

import backgroundImage2 from "@/public/Hero/StrangerThings/slider-bg.png";
import filmTitle2 from "@/public/Hero/StrangerThings/film-logo.png";
import mainCharacter2 from "@/public/Hero/StrangerThings/character.png";

const films = [
  {
    filmTitleImage: filmTitle,
    filmCharacterImage: mainCharacter,
    filmBackground: backgroundImage,
    description:
      "Таргариены ведут друг с другом ожесточенную борьбу за Железный трон. Самый долгожданный сериал года",
    url: "#",

    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],

    genres: [
      {
        name: "Боевик",
        icon: "💣",
        href: "#",
      },
      {
        name: "Мелодрама",
        icon: "💋",
        href: "#",
      },
      {
        name: "Драма",
        icon: "😢",
        href: "#",
      },
      {
        name: "Фэнтези",
        icon: "🧙",
        href: "#",
      },
    ],
  },
  {
    filmTitleImage: filmTitle2,
    filmCharacterImage: mainCharacter2,
    filmBackground: backgroundImage2,
    description:
      "1980-е годы, тихий провинциальный американский городок. Благоприятное течение местной жизни нарушает загадочное исчезновение подростка по имени Уилл.",

    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],

    genres: [
      {
        name: "Триллер",
        icon: "😰",
        href: "#",
      },
      {
        name: "Ужас",
        icon: "👻",
        href: "#",
      },
      {
        name: "Драма",
        icon: "😢",
        href: "#",
      },
      {
        name: "Фэнтези",
        icon: "🧙",
        href: "#",
      },
    ],
  },
];

const Hero = () => {
  const isSmallScreen = useBreakpointValue({ sm: true, md: false });

  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className={styles.mySwiper}
      >
        {films.map((item, id) => {
          console.log(item.ratings);
          const ratings = item.ratings;
          const genres = item.genres;

          return (
            <SwiperSlide>
              <Flex
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundPosition="center"
                minHeight="100vh"
                background={`linear-gradient(180deg, rgba(15, 13, 24, 0) 0%, rgba(15, 13, 24, 0.84) 100%), linear-gradient(90deg, rgba(15, 13, 24, 0.2) -11.3%, rgba(21, 21, 21, 0) 100%, rgba(15, 13, 24, 0) 100%), url(${item.filmBackground.src})`}
                color="white"
                flexWrap="wrap"
              >
                <Wrap className="container" mt="150px">
                  <Flex flex="1" flexDirection="column" flexWrap="wrap">
                    <Flex flexDirection="column">
                      {isSmallScreen && (
                        <Image src={item.filmCharacterImage} alt="" />
                      )}
                      <Image src={item.filmTitleImage} alt="" sizes="100vw" />
                    </Flex>
                    <Flex>
                      {ratings.map((item, id) => (
                        <div key={id} className="mb-10 mt-8 mr-9">
                          <Text>
                            <b>{item.rating}</b> <span>{item.service}</span>
                          </Text>
                        </div>
                      ))}
                    </Flex>

                    <Flex gap="15px">
                      <Wrap>
                        {genres.map((item, id) => (
                          <WrapItem key={id}>
                            <div className="hidden lg:flex md:hidden pt-3 pb-3 pr-5 pl-5 rounded-full backdrop-blur-md bg-white/30 flex-nowrap">
                              <Link href={item.href}>
                                {item.name} {item.icon}
                              </Link>
                            </div>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </Flex>

                    <Flex mt="40px">
                      <Container>
                        <Box fontSize="18px" lineHeight="27px" fontWeight="400">
                          {item.description}
                        </Box>
                      </Container>
                    </Flex>

                    <Box mt="60px">
                      <Link href={item.url}>
                        <Button
                          borderRadius={50}
                          pt="25px"
                          pb="25px"
                          pr="60px"
                          pl="60px"
                        >
                          {" "}
                          Страница фильма
                        </Button>
                      </Link>
                    </Box>
                  </Flex>

                  {!isSmallScreen && (
                    <Flex flex="2" flexDirection="column">
                      <Box ml={20}>
                        <Image src={item.filmCharacterImage} alt="" />
                      </Box>
                    </Flex>
                  )}
                </Wrap>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Hero;
