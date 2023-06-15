import {
    Box,
    Flex,
    Menu,
    Image,
    Text,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { FiltersMenuButton } from "./components/FiltersMenuButton/FiltersMenuButton";

import logo from "@/public/Hero/header/image.png";
import { useState, useEffect } from "react";

import { BsSearch } from "react-icons/bs";

import { PopularGenres } from "./components/GenresTab/PopularGenres";
import { Sorting } from "./components/GenresTab/Sorting";
import { Year } from "./components/GenresTab/Year";
import { Rating } from "./components/GenresTab/Rating";
import { Countries } from "./components/GenresTab/Countries";

const Filters = () => {
    const [isOpen, setIsOpen] = useState(true);
    const buttonHandler = () => {
        setIsOpen((current) => !current);
    };

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <Box
            position="fixed"
            margin="auto"
            left="50%"
            bottom="30px"
            transform="translate(-50%, -50%)"
            _focus={{ backgroundColor: "gray" }}
        >
            {isOpen && (
                <Box
                    width="auto"
                    maxWidth="780px"
                    maxHeight="350px"
                    height="auto"
                    bg="#080715"
                    p="25px 40px"
                    borderRadius="10px"
                    overflowY="auto"
                    overflowX="hidden"
                    className="scrollbar"
                >
                    <Box>
                        {/* TODO: Update filters expanding */}
                        {/* <PopularGenres /> */}
                        {/* <Sorting /> */}
                        {/* <Year /> */}
                        {/* <Rating /> */}
                        <Countries />
                    </Box>
                </Box>
            )}

            <Flex
                bg="rgba(0, 0, 0, 0.4)"
                backdropFilter="blur(7.5px)"
                borderRadius="15px"
                p="10px"
                justifyContent="center"
                alignItems="center"
            >
                <Box mr="25px">
                    <Flex alignItems="center">
                        <Image
                            src={logo.src}
                            width="30px"
                            height="30px"
                            mr="10px"
                            alt="30px"
                        />
                        <Text fontWeight="400" fontSize="14px" lineHeight="140%">
                            Фильтры
                        </Text>
                    </Flex>
                </Box>

                <Box bg="#080715" borderRadius="10px">
                    <Menu>
                        <FiltersMenuButton title="Жанр" onClick={buttonHandler} />
                        <FiltersMenuButton title="Сортировать" onClick={buttonHandler} />
                        <FiltersMenuButton title="Страна" onClick={buttonHandler} />
                        <FiltersMenuButton title="Год" onClick={buttonHandler} />
                        <FiltersMenuButton title="Рейтинг" onClick={buttonHandler} />
                    </Menu>
                </Box>
            </Flex>
        </Box>
    );
};
export default Filters;
