import { FC, useRef, useState } from "react";

import {
  Image,
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  Button,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";
import { GenresInline } from "@/components/GenresInline/GenresInline";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import { RatingInline } from "@/components/RatingInline/RatingInline";
import { Slider } from "@/components/Slider/Slider";

import { CarouselProps } from "@/types/IBigCarousel";

import preview from "@/public/preview.jpeg";
import play from "@/public/play.png";

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

export const BigCarousel: FC<CarouselProps> = ({ className, title, data }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeItem, setActiveItem] = useState(data[activeIndex]);

  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const isMediumScreen = useBreakpointValue({
    base: true,
    md: true,
    lg: true,
    xl: false,
  });

  const swiperNavigation = {
    prevEl: navigationPrevRef.current,
    nextEl: navigationNextRef.current,
  };

  return (
    <Box className={className}>
      <Flex>
        <Heading mb="70px">{title}</Heading>
        <Box bg="rgba(255, 255, 255, 0.05)">
          <Text
            fontWeight="400"
            fontSize="14px"
            p="8px 20px"
            borderRadius="full"
          >
            Показать всё
          </Text>
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
          {data.map((item, id) => {
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

      {!isMediumScreen && (
        <Flex
          bg="rgba(0, 0, 0, 0.4)"
          mt="30px"
          borderRadius="15px"
          width={{ lg: "1710px", md: "1390px" }}
          height={{ lg: "749px", md: "633px" }}
          position="relative"
        >
          <Box w="782px" h="547px" ml="50px" mt="220px" zIndex="5">
            <Flex flexDirection="column">
              <Flex mb="80px" gap="30px">
                {activeItem.genres.map((item: any, idx: number) => (
                  <GenresInline item={item} />
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
              <RatingInline item={activeItem.rating} />
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
                    p="25px 60px"
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
            <Button
              p="45px"
              bg="rgba(255, 255, 255, 0.05)"
              borderRadius="full"
              backdropFilter="blur(15px)"
            >
              <Image src={play.src} />
            </Button>
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
          {data.map((item, id) => {
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
