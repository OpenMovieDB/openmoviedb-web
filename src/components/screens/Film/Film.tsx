"use client";

import {
  Box,
  Flex,
  Link,
  Wrap,
  WrapItem,
  useBreakpointValue,
  Container,
  Button,
  Center,
} from "@chakra-ui/react";
import Img from "@/UI/Img/Img";
import { RatingInline } from "@/components/RatingInline/RatingInline";

/* --- Images --- */

import backgroundImage from "@/public/Hero/HouseOfDragon/slider-bg.png";
import filmTitle from "@/public/Hero/HouseOfDragon/film-logo.png";
import mainCharacter from "@/public/Hero/HouseOfDragon/character.png";

import backgroundImage2 from "@/public/Hero/StrangerThings/slider-bg.png";
import filmTitle2 from "@/public/Hero/StrangerThings/film-logo.png";
import mainCharacter2 from "@/public/Hero/StrangerThings/character.png";

import avatar1 from "@/public/Hero/avatar1.png";
import avatar2 from "@/public/Hero/avatar2.png";
import avatar3 from "@/public/Hero/avatar3.png";
import avatar4 from "@/public/Hero/avatar4.png";

const currentFilm = [
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

    charactersList: [
      {
        image: avatar1.src,
        firstName: "Вайнона",
        lastName: "Райдер",
      },
      {
        image: avatar2.src,
        firstName: "Вайнона",
        lastName: "Райдер",
      },
      {
        image: avatar3.src,
        firstName: "Вайнона",
        lastName: "Райдер",
      },
      {
        image: avatar4.src,
        firstName: "Вайнона",
        lastName: "Райдер",
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
];

const Film = () => {
  const isSmallScreen = useBreakpointValue({ sm: true, md: false });

  return (
    <Box
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
    ></Box>
  );
};

export default Film;
