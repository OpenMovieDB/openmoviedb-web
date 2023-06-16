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
        <Box className="container" mt="150px">
            <Flex>
                <Heading fontFamily="Neue Machina">Популярное</Heading>

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
