import { WrapItem, Link, Text, Box, HStack, Image } from "@chakra-ui/react";

import { GenresProps } from "@/types/IGenres";

export const GenresInline = ({ item }: GenresProps) => {
    const { name, icon, href }: any = { ...item };

    return (
        <WrapItem>
            <Link href={href}>
                <Box p="6px 20px" bg="rgba(255, 255, 255, 0.05)" borderRadius="full">
                    <HStack spacing="15px">
                        <Image src={icon} alt="" maxWidth="31px" maxHeight="31px" />
                        <Text fontWeight="400" fontSize="14px">
                            {name}
                        </Text>
                    </HStack>
                </Box>
            </Link>
        </WrapItem>
    );
};
