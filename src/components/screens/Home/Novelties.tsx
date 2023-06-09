"use client";

import { listOfNovelties } from "@/src/objects";

import { FC, useRef, useState } from "react";

import {
  Image,
  Divider,
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  Button,
  ButtonGroup,
  Text,
  Link,
} from "@chakra-ui/react";
import { GenresInline } from "@/components/GenresInline/GenresInline";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import { RatingInline } from "@/components/RatingInline/RatingInline";
import { Slider } from "@/components/Slider/Slider";

import preview from "@/public/preview.jpeg";
import play from "@/public/play.png";

const Novelties = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const [activeIndex, setActiveIndex] = useState(1);
  const [activeItem, setActiveItem] = useState(listOfNovelties[activeIndex]);

  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const isMediumScreen = useBreakpointValue({
    base: true,
    md: true,
    lg: true,
    xl: false,
  });

  return (
    <Box className="container mt-96">
      <Flex>
        <Heading mr="30px">Новинки кино</Heading>
        <Box
          bg="rgba(255, 255, 255, 0.05)"
          borderRadius="full"
          p="8px 20px"
          ml="30px"
        >
          <Link href="#">
            <Text fontWeight="400" fontSize="14px">
              Показать всё
            </Text>
          </Link>
        </Box>
      </Flex>

      <Flex alignItems="center">
        <Slider
          isWheel
          marginTop={10}
          titleMargin={60}
          arrowMargin={20}
          title=" "
        >
          {listOfNovelties.map((item, id) => {
            return (
              <Box
                key={id}
                onClick={() => {
                  setActiveIndex(id);
                  setActiveItem(item);
                }}
                onMouseEnter={() => setHoveredIndex(id)}
                onMouseLeave={() => setHoveredIndex(-1)}
                mr="30px"
              >
                <MovieCard item={item} />

                {hoveredIndex === id && (
                  <Divider
                    mt="15px"
                    height="3px"
                    style={{
                      background:
                        "radial-gradient(100% 376.62% at 100% 0%, #00F0FF 0%, #BD00FF 45.31%, #0500FF 100%",
                      transition: "all 0.5s ease-out",
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Slider>
      </Flex>

      {!isMediumScreen && (
        <Flex
          bg="rgba(0, 0, 0, 0.4)"
          borderRadius="15px"
          width={{ lg: "1710px", md: "1390px" }}
          height={{ lg: "749px", md: "633px" }}
          position="relative"
        >
          <Box w="782px" h="547px" ml="50px" mt="100px" zIndex="5">
            <Flex flexDirection="column">
              <Flex mb="80px" gap="30px">
                {activeItem.genres.map((item: any, id: number) => (
                  <Box key={id}>
                    <GenresInline item={item} />
                  </Box>
                ))}
              </Flex>{" "}
              <Heading
                mb="30px"
                fontWeight="800"
                fontSize="40px"
                lineHeight="41px"
              >
                {activeItem.title}
              </Heading>
              <Flex>
                {activeItem.ratings.map((item, id) => {
                  console.log(item);
                  return (
                    <Box key={id}>
                      <RatingInline item={item} />
                    </Box>
                  );
                })}
              </Flex>
              <Box
                fontStyle="normal"
                fontWeight="400"
                fontSize="18px"
                lineHeight="150%"
              >
                {activeItem.description}
              </Box>
              <Box>
                <ButtonGroup>
                  <Button
                    p="40px 60px"
                    fontSize="18px"
                    lineHeight="150%"
                    textAlign="center"
                    borderRadius="full"
                    mt={20}
                    bg="#121119"
                  >
                    Подробнее
                  </Button>
                  <Button
                    p="25px 60px"
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="150%"
                    textAlign="center"
                    borderRadius="full"
                    mt={20}
                    bg="transparent"
                  >
                    В избранное
                  </Button>
                  <Button
                    p="25px 60px"
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="150%"
                    textAlign="center"
                    borderRadius="full"
                    mt={20}
                    bg="transparent"
                  >
                    Саундтреки
                  </Button>
                </ButtonGroup>
              </Box>
            </Flex>{" "}
          </Box>
          <Flex
            bg={`linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 18.96%), url(${preview.src})`}
            borderRadius="15px"
            w="80rem"
            h="47rem"
            objectFit="contain"
            backgroundSize="cover"
            alignItems="center"
            justifyContent="center"
            pr="100px"
            position="absolute"
            right="0px"
          >
            {/* <Button
									p="45px"
									bg="rgba(255, 255, 255, 0.05)"
									borderRadius="full"
									backdropFilter="blur(15px)"
									>
									<Image src={play.src} />
									</Button> */}
          </Flex>
        </Flex>
      )}

      <Flex alignItems="center" mt="30px">
        <Slider
          isWheel
          marginTop={10}
          titleMargin={60}
          arrowMargin={20}
          title=" "
        >
          {listOfNovelties.map((item, id) => {
            return (
              <Box
                key={id}
                onClick={() => {
                  setActiveIndex(id);
                  setActiveItem(item);
                }}
                style={{ marginRight: "30px" }}
              >
                <MovieCard item={item} />
              </Box>
            );
          })}
        </Slider>
      </Flex>
    </Box>
  );
};

export default Novelties;
