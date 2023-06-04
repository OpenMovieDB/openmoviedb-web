"use client";

import { useState } from "react";
import {
  Box,
  Button,
  FormErrorMessage,
  FormControl,
  Input,
  Stack,
  Text,
  Flex,
  InputGroup,
  InputRightElement,
  HStack,
  Spacer,
  Heading,
  VStack,
  Link,
  useToast,
} from "@chakra-ui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FaVk, FaOdnoklassniki, FaFacebook, FaGoogle } from "react-icons/fa";
import background from "@/public/register/bg.png";

import { useFormik } from "formik";
import * as Yup from "yup";

interface RegistrationFormValues {
  email: string;
  username: string;
  password: string;
}

const RegistrationFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Введите корректный адрес электронной почты")
    .required("Введите адрес электронной почты"),
  username: Yup.string().required("Введите ваш никнейм"),
  password: Yup.string()
    .required("Введите ваш пароль")
    .min(6, "Пароль должен содержать не менее 6 символов"),
});
const RegisterPage = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClickShowEye = () => setShow(!show);

  const toast = useToast();

  const formik = useFormik<RegistrationFormValues>({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: RegistrationFormSchema,
    onSubmit: async (values) => {
      setIsLoading(true);

      // TODO: отправить данные на сервер

      setIsLoading(false);
      toast({
        title: "Вы успешно зарегистрировались!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    },
  });
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      h="100vh"
      bg={`radial-gradient(171.02% 540.49% at 0% 100%, #0F0D18 0%, rgba(15, 13, 24, 0) 100%), url(${background.src})`}
    >
      <VStack>
        <Heading fontWeight="800" fontSize="40px" lineHeight="41px" mb="50px">
          Регистрация
        </Heading>
        <Flex
          flexDirection="column"
          maxWidth="550px"
          maxHeight="660px"
          bg="#080715"
          borderRadius="15px"
          m="20px"
        >
          <Flex justifyContent="center" alignItems="center">
            <Stack spacing="15px" p="60px">
              <form onSubmit={formik.handleSubmit}>
                <FormControl
                  id="email"
                  isInvalid={Boolean(
                    formik.errors.email && formik.touched.email
                  )}
                >
                  <Input
                    placeholder="E-mail"
                    variant="flushed"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <Box mt={2} color="red.500">
                      {formik.errors.email}
                    </Box>
                  )}{" "}
                </FormControl>

                <FormControl
                  isInvalid={Boolean(
                    formik.errors.username && formik.touched.username
                  )}
                >
                  <Input
                    placeholder="Логин"
                    variant="flushed"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                  />
                  {formik.touched.username && formik.errors.username && (
                    <Box mt={2} color="red.500">
                      {formik.errors.username}
                    </Box>
                  )}{" "}
                </FormControl>

                <FormControl
                  isInvalid={Boolean(
                    formik.errors.password && formik.touched.password
                  )}
                >
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      variant="flushed"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={handleClickShowEye}
                      >
                        {show ? <HiEyeOff /> : <HiEye />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {formik.touched.password && formik.errors.password && (
                    <Box mt={2} color="red.500">
                      {formik.errors.password}
                    </Box>
                  )}{" "}
                </FormControl>

                <Button
                  p="25px 60px"
                  borderRadius="full"
                  border="#1f1f1f 1px solid"
                  maxW="284px"
                  maxH="77px"
                  mt="40px"
                  type="submit"
                  isLoading={isLoading}
                >
                  Зарегистрироваться
                </Button>
              </form>
            </Stack>
          </Flex>

          <Box p="0px 60px 60px 60px">
            <Flex
              alignItems="left"
              justifyContent="left"
              flexDirection="column"
              mt="30px"
            >
              <Text mr="15px">Войти с помощью:</Text>
              <HStack spacing={{ lg: "20px", sm: "60px" }} mt="15px">
                <Link href="#">
                  <FaVk size="25px" color="#fff" />
                </Link>
                <Link href="#">
                  <FaOdnoklassniki size="25px" color="#fff" />
                </Link>
                <Link href="#">
                  <FaFacebook size="25px" color="#fff" />
                </Link>
                <Link href="#">
                  <FaGoogle size="25px" color="#fff" />
                </Link>
              </HStack>
            </Flex>

            <Flex alignItems="center" mt="60px">
              <Box>
                <Text>Уже есть аккаунт?</Text>
              </Box>
              <Spacer />
              <Box>
                <Button p="8px 20px" borderRadius="full">
                  Войти
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default RegisterPage;
