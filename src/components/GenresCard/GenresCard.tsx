import { useState } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { IGenresCard } from "./IGenresCard";

export const GenresCard = ({ item }: IGenresCard) => {
    const { icon, type } = { ...item };
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Flex
            height={{ xl: "260px", md: "207px", sm: "116px" }}
            width={{ xl: "260px", md: "207px", sm: "116px" }}
            minHeight={{ xl: "260px", md: "207px" }}
            minWidth={{ xl: "260px", md: "207px" }}
            borderRadius="15px"
            bgColor={isHovered ? "white" : "rgba(255, 255, 255, 0.05)"}
            color={isHovered ? "#0F0D18" : "white"}
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            position="relative"
            transition="background-color ease-in-out 0.3s"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                src={icon}
                width={{ xl: "147px", md: "147px", sm: "76px" }}
                height={{ xl: "145px", md: "92px", sm: "31px" }}
                alt=""
            />
            <Text mt="25px" fontWeight="800" fontSize="14px" lineHeight="14px">
                {type}
            </Text>
            {isHovered && (
                <>
                    <div
                        style={{
                            position: "absolute",
                            top: "10%",
                            left: "-8%",
                            width: "75px",
                            height: "75px",
                            transform: "rotate(33.97deg)",
                            background: `url('${icon}')`,
                            backgroundSize: "cover",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: "2%",
                            left: "70%",
                            width: "32px",
                            height: "32px",
                            transform: "rotate(-7.5deg)",
                            background: `url('${icon}')`,
                            backgroundSize: "cover",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: "60%",
                            left: "4%",
                            width: "38px",
                            height: "38px",
                            transform: "rotate(18.22deg)",
                            background: `url('${icon}')`,
                            backgroundSize: "cover",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: "60%",
                            left: "87%",
                            width: "75px",
                            height: "75px",
                            transform: "rotate(60.04deg)",
                            background: `url('${icon}')`,
                            backgroundSize: "cover",
                        }}
                    />
                </>
            )}
        </Flex>
    );
};
