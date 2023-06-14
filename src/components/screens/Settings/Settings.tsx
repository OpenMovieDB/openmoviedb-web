"use client";

import { useState, useEffect } from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Input,
    List,
    ListItem,
    useBreakpointValue,
    Link,
    Spacer,
    Image,
    Grid,
    GridItem,
} from "@chakra-ui/react";
import { AccountSettingsSection } from "./components/AccountSettingsSection/AccountSettingsSection";
import { ChangePasswordSection } from "./components/ChangePasswordSection/ChangePasswordSection";

import { PrimaryButton } from "@/components/UI/PrimaryButton/PrimaryButton";
import { Slider } from "@/components/Slider/Slider";

import avatar_1 from "@/public/avatars/avatar_1.png";
import avatar_2 from "@/public/avatars/avatar_2.png";
import avatar_3 from "@/public/avatars/avatar_3.png";
import avatar_4 from "@/public/avatars/avatar_4.png";
import avatar_5 from "@/public/avatars/avatar_5.png";
import avatar_6 from "@/public/avatars/avatar_6.png";
import avatar_7 from "@/public/avatars/avatar_7.png";

const listOfAvatars = [
    {
        icon: avatar_1.src,
    },
    {
        icon: avatar_2.src,
    },
    {
        icon: avatar_3.src,
    },
    {
        icon: avatar_4.src,
    },
    {
        icon: avatar_5.src,
    },
    {
        icon: avatar_6.src,
    },
    {
        icon: avatar_7.src,
    },
];

const settingsElements = [
    {
        title: "Настройки аккаунта",
        href: "#",
    },
    { title: "Безопасность", href: "#" },
    { title: "Выход", href: "#" },
];

export const Settings = () => {
    const [isSelected, setIsSelected] = useState(true);
    const buttonHandler = () => {
        setIsSelected((current) => !current);
    };

    useEffect(() => {
        console.log(isSelected);
    }, [isSelected]);

    const isSmallScreen = useBreakpointValue({ sm: true, md: false });
    const isMediumScreen = useBreakpointValue({
        base: true,
        md: true,
        lg: true,
        xl: false,
    });

    return (
        <Flex className="container" mt="90px">
            <Box>
                <Flex flexDirection="column" gap="30px" ml="30px">
                    {settingsElements.map((item, id) => (
                        <Link key={id} href={item.href}>
                            <Text
                                fontWeight="400"
                                fontSize="18px"
                                lineHeight="27px"
                                bg="transparent"
                                _hover={{
                                    background: "rgba(0, 0, 0, 0.4)",
                                    //padding: "6px 20px",
                                    borderRadius: "50px",
                                    textDecoration: "none",
                                }}
                            >
                                {item.title}
                            </Text>
                        </Link>
                    ))}
                </Flex>
            </Box>

            <Spacer />

            <Box>
                <Flex flexWrap="wrap" flexDirection="column">
                    {isMediumScreen && (
                        <Heading fontWeight="800" fontSize="40px" lineHeight="41px">
                            Настройки аккаунта
                        </Heading>
                    )}
                    <Box>
                        <Text>E-mail</Text>
                        <Input
                            placeholder="Введите e-mail"
                            variant="flushed"
                            width="550px"
                            maxWidth="550px"
                            mt="30px"
                        />
                    </Box>

                    {!isSmallScreen && (
                        <Box mt="60px">
                            <Text>Сменить аватар</Text>

                            <Flex alignItems="center" mt="40px">
                                <Box mr="70px">
                                    <Image
                                        src={avatar_1.src}
                                        alt=""
                                        width="115px"
                                        height="115px"
                                    />
                                </Box>

                                <Grid
                                    templateColumns="repeat(4, 1fr)"
                                    gap="30px"
                                    maxWidth="370px"
                                >
                                    {listOfAvatars.map((item, id) => (
                                        <GridItem
                                            key={id}
                                            cursor="pointer"
                                            outline="2px solid mediumpurple"
                                            outlineOffset="7px"
                                            borderRadius="50px"
                                        >
                                            <Image
                                                src={item.icon}
                                                width="60px"
                                                height="60px"
                                                alt=""
                                            />
                                        </GridItem>
                                    ))}
                                </Grid>
                            </Flex>
                        </Box>
                    )}

                    <Flex justifyContent="center" alignItems="center" mt="100px">
                        <PrimaryButton>Сохранить</PrimaryButton>
                    </Flex>
                </Flex>

                <Flex mt="300px" flexWrap="wrap" flexDirection="column" width="550px">
                    {isMediumScreen && (
                        <Heading fontWeight="800" fontSize="40px" lineHeight="41px">
                            Смена пароля
                        </Heading>
                    )}

                    <Box mt={isMediumScreen ? "70px" : "0px"}>
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

            <Spacer />
        </Flex>
    );
};
