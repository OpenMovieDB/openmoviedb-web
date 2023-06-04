"use client";

import { Box, Flex, Heading, Text, Input } from "@chakra-ui/react";
import { AccountSettingsSection } from "./components/AccountSettingsSection/AccountSettingsSection";
import { ChangePasswordSection } from "./components/ChangePasswordSection/ChangePasswordSection";

import { MovieCard } from "@/components/MovieCard/MovieCard";
import Filters from "@/components/Filters/Filters";

import { listOfPopular } from "@/src/objects";
import { PrimaryButton } from "@/components/UI/PrimaryButton/PrimaryButton";

export const Settings = () => {
  /* return (
		 *   <>
		 *     <Box className="container" mt="90px">
		 *       <Flex mt="200px">
		 *         <Heading fontWeight="800" fontSize="40px" lineHeight="41px">
		 *           Настройки аккаунта
		 *         </Heading>
		 *         <Box>
		 *           <Text>E-mail</Text>
		 *           <Input placeholder="Введите e-mail" variant="flushed" />
		 *         </Box>
		 *       </Flex>

		 *       <Flex>
		 *         <Input />
		 *       </Flex>
		 *     </Box>
		 *   </>
		 * );
		 */
  return (
    <>
      <Box className="container" mt="90px">
        <Box></Box>
        <Flex mt="130px" flexWrap="wrap" flexDirection="column">
          <Heading fontWeight="800" fontSize="40px" lineHeight="41px">
            Настройки аккаунта
          </Heading>
          <Box>
            <Text mt="70px">E-mail</Text>
            <Input
              placeholder="Введите e-mail"
              variant="flushed"
              mt="30px"
              maxWidth="444px"
            />
          </Box>
          <Flex justifyContent="center" alignItems="center" mt="100px">
            <PrimaryButton>Сохранить</PrimaryButton>
          </Flex>
        </Flex>

        <Flex mt="300px" flexWrap="wrap" flexDirection="column">
          <Heading fontWeight="800" fontSize="40px" lineHeight="41px">
            Смена пароля
          </Heading>
          <Box mt="70px">
            <Text>Текущий пароль</Text>
            <Input
              placeholder="***************"
              variant="flushed"
              mt="30px"
              maxWidth="444px"
            />
          </Box>
          <Box mt="70px">
            <Text>Новый пароль</Text>
            <Input
              placeholder="***************"
              variant="flushed"
              mt="30px"
              maxWidth="444px"
            />
          </Box>
          <Box mt="70px">
            <Text>Подтвердите пароль</Text>
            <Input
              placeholder="***************"
              variant="flushed"
              mt="30px"
              maxWidth="444px"
            />
          </Box>
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="100px">
          <PrimaryButton>Сохранить</PrimaryButton>
        </Flex>
      </Box>
    </>
  );
};
