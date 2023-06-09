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
    const [showMediumScreen, setShowMediumScreen] = useState(false);

    const isSmallScreen = useBreakpointValue({ base: true, md: false });
    const isMediumScreen = useBreakpointValue({
        base: true,
        md: true,
        lg: true,
        xl: false,
    });

    return (
        <Box mt="150px">
            <Flex alignItems="center">
                <Text fontSize="40px" fontWeight="800" mr="30px">
                    Новинки кино
                </Text>

                <Link href="#">
                    <div className="w-[134px] h-[36px] px-[20px] py-2 bg-white bg-opacity-5 rounded-[28px] justify-center items-center gap-[10px] inline-flex">
                        <div className="text-white text-[14px] font-normal leading-tight">
                            <Text fontWeight="400" fontSize="14px">
                                Показать все
                            </Text>
                        </div>
                    </div>
                </Link>
            </Flex>

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
                                setShowMediumScreen(true); // измените значение состояния при клике на компонент
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

            {!isMediumScreen && showMediumScreen && (
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
                                {
                                    //@ts-ignore
                                    activeItem.ratings.map((item, id) => {
                                        console.log(item);
                                        return (
                                            <Box key={id}>
                                                <RatingInline item={item} />
                                            </Box>
                                        );
                                    })
                                }
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
                    ></Flex>
                </Flex>
            )}

            {isMediumScreen &&
                showMediumScreen && ( // добавьте новый блок с таким условием
                    <Flex>nothing</Flex>
                )}

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
                                setShowMediumScreen(true); // измените значение состояния при клике на компонент
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
        </Box>
    );
};

export default Novelties;
