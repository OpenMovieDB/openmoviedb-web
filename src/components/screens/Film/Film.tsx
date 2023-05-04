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
      background={`linear-gradient(180deg, rgba(15, 13, 24, 0) 0%, rgba(15, 13, 24, 0.84) 100%), linear-gradient(90deg, rgba(15, 13, 24, 0.2) -11.3%, rgba(21, 21, 21, 0) 100%, rgba(15, 13, 24, 0) 100%), url(${currentFilm.filmBackground})`}
    >
      <Flex color="white" flexWrap="wrap">
        <Wrap className="container" mt="150px">
          <Flex flex="1" flexDirection="column" flexWrap="wrap">
            <Flex flexDirection="column">
              {isSmallScreen && (
                <Img src={currentFilm.filmCharacterImage} alt="" />
              )}
              <Img src={currentFilm.filmTitleImage} alt="" sizes="100vw" />
            </Flex>
            <Flex>
              {ratings.map((currentFilm, id) => (
                <RatingInline currentFilm={currentFilm} key={id} />
              ))}
            </Flex>

            <Flex gap="15px">
              <Wrap>
                {genres.map((currentFilm, id) => (
                  <WrapCurrentFilm key={id}>
                    <div className="hidden lg:flex md:hidden pt-3 pb-3 pr-5 pl-5 rounded-full backdrop-blur-md bg-white/30 flex-nowrap">
                      <Link href={currentFilm.href}>
                        {currentFilm.name} {currentFilm.icon}
                      </Link>
                    </div>
                  </WrapCurrentFilm>
                ))}
              </Wrap>
            </Flex>

            <Flex mt="40px">
              <Container>
                <Box fontSize="18px" lineHeight="27px" fontWeight="400">
                  {currentFilm.description}
                </Box>
              </Container>
            </Flex>

            <Box mt="60px">
              <Link href={currentFilm.url}>
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
                <Img src={currentFilm.filmCharacterImage} alt="" />
              </Box>
            </Flex>
          )}
        </Wrap>
      </Flex>
      <Center>
        <div className="hidden lg:flex md:flex pt-4 pb-4 rounded-full bg-black">
          {characters.map((currentFilm, id) => (
            <div
              key={id}
              className="mr-4 flex currentFilms-center content-center gap-2"
            >
              <div>
                <Img src={currentFilm.image} width={46} height={46} alt="" />
              </div>
              <div>
                {currentFilm.firstName} {currentFilm.lastName}
              </div>
            </div>
          ))}
        </div>
      </Center>
    </Box>
  );
};

export default Film;
