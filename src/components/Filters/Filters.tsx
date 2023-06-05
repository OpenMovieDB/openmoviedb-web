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
        <Box width="auto" height="350px" bg="#080715" p="25px 40px">
          <InputGroup m="25px 40px">
            <Input
              placeholder="Поиск по фильмам"
              bg="rgba(255, 255, 255, 0.05)"
              padding="20px 25px"
              borderRadius="full"
              maxHeight="67px"
              border="0px"
              width={{ lg: "600px", md: "570px", sm: "380px" }}
              height="40px"
              _focus={{
                background: "white",
                color: "black.600",
              }}
            />
            <InputRightElement width="22px" m="12px 13px">
              <BsSearch />
            </InputRightElement>
          </InputGroup>

          <Box overflowY="auto">
            {/* <PopularGenres /> */}
            <Sorting />
          </Box>
        </Box>
      )}

      <Flex
        bg="rgba(0, 0, 0, 0.4)"
        backdropFilter="blur(7.5px)"
        borderRadius="15px"
        p="10px"
        justifyContent="bottom"
        alignItems="bottom"
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
        <Box bg="#080715" borderRadius="10px" p="15px 18px">
          <Menu>
            <FiltersMenuButton title="Жанр" onClick={buttonHandler} />
            <FiltersMenuButton title="Сортировка" onClick={buttonHandler} />
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
