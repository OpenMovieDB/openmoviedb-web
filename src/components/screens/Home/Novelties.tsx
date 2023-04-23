"use client";

import { SwiperSlide } from "swiper/react";
import { BigCarousel } from "@/components/BigCarousel/BigCarousel";
import { Flex, Box, Text, Center, Image } from "@chakra-ui/react";

import image1 from "@/public/Novelties/main-poster-0.png";
import image2 from "@/public/Novelties/main-poster-1.png";
import image3 from "@/public/Novelties/main-poster-2.png";
import image4 from "@/public/Novelties/main-poster-3.png";
import Rating from "@/components/Rating/Rating";
import Genres from "./Genres";

const Novelties = () => {
  const listOfNovelties = [
    {
      id: 1,
      image: image1.src,
      description:
        "Хозяева Макса уезжают за город в гости на ранчо и берут его с собой. Тем временем, в городе у Снежка и Гиджет свои приключения.",
      title: "История игрушек 4",
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
      rating: 7.1,
      url: "1",
    },
    {
      id: 2,
      image: image2.src,
      title: "Тайная жизнь домашних животных 2",
      description:
        "Хозяева Макса уезжают за город в гости на ранчо и берут его с собой. Тем временем, в городе у Снежка и Гиджет свои приключения.",
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
      rating: 7.1,
      url: "2",
    },
    {
      id: 3,
      image: image3.src,
      description:
        "Хозяева Макса уезжают за город в гости на ранчо и берут его с собой. Тем временем, в городе у Снежка и Гиджет свои приключения.",
      title: "Люди в чёрном: Интернэшнл",
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
      rating: 7.1,
      url: "3",
    },
    {
      id: 4,
      image: image4.src,
      description:
        "Хозяева Макса уезжают за город в гости на ранчо и берут его с собой. Тем временем, в городе у Снежка и Гиджет свои приключения.",
      title: "Люди икс: Тёмный феникс",
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
      rating: 7.1,
      url: "4",
    },
    /* {
     *   id: 5,
     *   image: image1.src,
     *   description:
     *     "Хозяева Макса уезжают за город в гости на ранчо и берут его с собой. Тем временем, в городе у Снежка и Гиджет свои приключения.",
     *   title: "История игрушек 4",
     *   genres: [
     *     {
     *       name: "Триллер",
     *       icon: "😰",
     *       href: "#",
     *     },
     *     {
     *       name: "Ужас",
     *       icon: "👻",
     *       href: "#",
     *     },
     *     {
     *       name: "Драма",
     *       icon: "😢",
     *       href: "#",
     *     },
     *     {
     *       name: "Фэнтези",
     *       icon: "🧙",
     *       href: "#",
     *     },
     *   ],
     *   rating: 7.1,
     *   url: "1",
     * },
     * {
     *   id: 6,
     *   image: image2.src,
     *   title: "Тайная жизнь домашних животных 2",
     *   description:
     *     "Хозяева Макса уезжают за город в гости на ранчо и берут его с собой. Тем временем, в городе у Снежка и Гиджет свои приключения.",
     *   genres: [
     *     {
     *       name: "Триллер",
     *       icon: "😰",
     *       href: "#",
     *     },
     *     {
     *       name: "Ужас",
     *       icon: "👻",
     *       href: "#",
     *     },
     *     {
     *       name: "Драма",
     *       icon: "😢",
     *       href: "#",
     *     },
     *     {
     *       name: "Фэнтези",
     *       icon: "🧙",
     *       href: "#",
     *     },
     *   ],
     *   rating: 7.1,
     *   url: "2",
     * },
     * {
     *   id: 7,
     *   image: image3.src,
     *   description:
     *     "Хозяева Макса уезжают за город в гости на ранчо и берут его с собой. Тем временем, в городе у Снежка и Гиджет свои приключения.",
     *   title: "Люди в чёрном: Интернэшнл",
     *   genres: [
     *     {
     *       name: "Триллер",
     *       icon: "😰",
     *       href: "#",
     *     },
     *     {
     *       name: "Ужас",
     *       icon: "👻",
     *       href: "#",
     *     },
     *     {
     *       name: "Драма",
     *       icon: "😢",
     *       href: "#",
     *     },
     *     {
     *       name: "Фэнтези",
     *       icon: "🧙",
     *       href: "#",
     *     },
     *   ],
     *   rating: 7.1,
     *   url: "3",
     * },
     * {
     *   id: 8,
     *   image: image4.src,
     *   description:
     *     "Хозяева Макса уезжают за город в гости на ранчо и берут его с собой. Тем временем, в городе у Снежка и Гиджет свои приключения.",
     *   title: "Люди икс: Тёмный феникс",
     *   genres: [
     *     {
     *       name: "Триллер",
     *       icon: "😰",
     *       href: "#",
     *     },
     *     {
     *       name: "Ужас",
     *       icon: "👻",
     *       href: "#",
     *     },
     *     {
     *       name: "Драма",
     *       icon: "😢",
     *       href: "#",
     *     },
     *     {
     *       name: "Фэнтези",
     *       icon: "🧙",
     *       href: "#",
     *     },
     *   ],
     *   rating: 7.1,
     *   url: "4",
     * }, */
  ];

  return (
    <BigCarousel
      title="Новинки"
      data={listOfNovelties}
      className="mt-96"
    ></BigCarousel>
  );
};

{
  /* <BigCarousel title="Новинки кино" className="mt-96">
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
		<Box></Box>

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
		</BigCarousel>
		); */
}

export default Novelties;
