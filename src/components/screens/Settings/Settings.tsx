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

import { NavBar } from "./components/NavBar/NavBar";
import { Slider } from "@/components/Slider/Slider";

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
                <NavBar />
            </Box>

            <Spacer />

            <Box>
                {/* <AccountSettingsSection /> */}
                <ChangePasswordSection />
            </Box>

            <Spacer />
        </Flex>
    );
};
