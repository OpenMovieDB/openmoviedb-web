"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import { Slider } from "@/components/Slider/Slider";
import { MovieTopOfMonthCard } from "@/components/MovieTopOfMonthCard/MovieTopOfMonthCard";

import kh_poster from "@/public/TopOfMonth/kh_poster.png";
import kh_title from "@/public/TopOfMonth/kh_title.png";

import of_poster from "@/public/TopOfMonth/of_poster.png";
import of_title from "@/public/TopOfMonth/of_title.png";

import ac_poster from "@/public/TopOfMonth/ac_poster.png";
import ac_title from "@/public/TopOfMonth/ac_title.png";

const mock = [
    { poster: kh_poster.src, title: kh_title.src },
    { poster: of_poster.src, title: of_title.src },
    { poster: ac_poster.src, title: ac_title.src },
    { poster: kh_poster.src, title: kh_title.src },
    { poster: of_poster.src, title: of_title.src },
    { poster: ac_poster.src, title: ac_title.src },
];

const TopOfMonth = () => (
    <Box className="container" mt="70px" minHeight="520px">
        <Box>
            <Slider
                isWheel
                marginTop={10}
                titleMargin={60}
                arrowMargin={20}
                title="Топ месяца"
            >
                {mock.map((item, i) => (
                    <MovieTopOfMonthCard
                        key={i + 1}
                        position={i + 1}
                        poster={item.poster}
                        title={item.title}
                    />
                ))}
            </Slider>
        </Box>
    </Box>
);

export default TopOfMonth;
