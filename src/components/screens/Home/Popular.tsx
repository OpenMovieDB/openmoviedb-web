"use client";

import { useState } from "react";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import { Box, Flex, Heading, Text, Image, Link } from "@chakra-ui/react";
import rightArrow from "@/public/right.png";

import { MovieCardEmpty } from "@/components/MovieCardEmpty/MovieCardEmpty";
import { listOfPopular } from "@/src/objects";
import { Slider } from "@/components/Slider/Slider";

const Popular = () => {
    return (
        <Box mt="150px">
            <Flex alignItems="center">
                <Text fontSize="40px" fontWeight="800" mr="30px">
                    Популярное
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

            <Flex
                mt="70px"
                flexWrap="wrap"
                gap="30px"
                alignItems="center"
                justifyContent="left"
            >
                {listOfPopular.slice(0, 7).map((item, id) => {
                    return (
                        <Box key={id}>
                            <MovieCard item={item} />
                        </Box>
                    );
                })}
                <Box>
                    <MovieCardEmpty>
                        <Flex
                            flexDirection="column"
                            justifyContent="left"
                            alignItems="center"
                        >
                            <Box w="26px" h="52px" color="#898990" mb="25px">
                                <Image src={rightArrow.src} alt="" />
                            </Box>
                            <Text
                                fontSize="14px"
                                fontWeight="800"
                                lineHeight="14px"
                                color="#898990"
                            >
                                Показать ещё
                            </Text>
                        </Flex>
                    </MovieCardEmpty>
                </Box>
            </Flex>
        </Box>
    );
};

export default Popular;
