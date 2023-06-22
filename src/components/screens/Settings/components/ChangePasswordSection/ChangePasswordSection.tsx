import { Box, Input, Flex, Heading, Text } from "@chakra-ui/react";
import { PrimaryButton } from "@/components/UI/PrimaryButton/PrimaryButton";

export const ChangePasswordSection = () => {
    return (
        <>
            <Flex
                flexWrap="wrap"
                flexDirection="column"
                width="370px"
                maxWidth="370px"
            >
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
        </>
    );
};
