import { FC, ReactNode, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

/* import "swiper/swiper.min.css";
 * import "swiper/components/navigation/navigation.min.css"; */
import "swiper/css";

import {
  Image,
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Genres } from "@/components/Genres/Genres";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import { RatingInline } from "@/components/RatingInline/RatingInline";
import { SliderBtn } from "@/UI/SliderBtn/SliderBtn";

/* import { CarouselProps } from "@/types/IBigCarousel"; */
import { INovelties } from "@/screens/Home/Novelties";

import preview from "@/public/preview.jpeg";
import play from "@/public/play.png";

interface CarouselProps {
  items: Array<any>;
  autoplay?: boolean;
  autoplaySpeed?: number;
  infiniteLoop?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  arrowLeft?: JSX.Element;
  arrowRight?: JSX.Element;
  dot?: JSX.Element;
  itemWidth?: number | string;
  itemHeight?: number | string;
  responsive?: Array<{
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll?: number;
      itemWidth?: number | string;
      itemHeight?: number | string;
    };
  }>;
  beforeChange?: (oldIndex: number, newIndex: number) => void;
  afterChange?: (currentIndex: number) => void;
}

interface CarouselProps {
  className: string;
  title: string;
  data: Array<INovelties>;
}

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

  const swiperParams = {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 15,
    navigation: swiperNavigation,
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
          {data.map((item, id) => {
            return (
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
                <MovieCard item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {!isSmallScreen && <SliderBtn dir="right" ref={navigationNextRef} />}
      </Flex>

      {!isMediumScreen && (
        <Flex
          bg="rgba(0, 0, 0, 0.4)"
          mt="30px"
          className="container"
          borderRadius="15px"
          height="749px"
          position="relative"
        >
          <Box w="782px" h="547px" ml="50px" mt="220px" zIndex="5">
            <Flex flexDirection="column">
              <Flex mb="80px" gap="30px">
                <Genres data={activeItem} />
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
        {!isSmallScreen && <SliderBtn dir="left" ref={navigationPrevRef} />}
        <Swiper modules={[Navigation]} {...swiperParams}>
          {data.map((item, id) => {
            return (
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
                <MovieCard item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {!isSmallScreen && <SliderBtn dir="right" ref={navigationNextRef} />}
      </Flex>
    </Box>
  );
};
