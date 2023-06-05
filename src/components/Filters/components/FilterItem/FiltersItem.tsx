import {
  Flex,
  Wrap,
  WrapItem,
  Box,
  Link,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

import { GenresProps, GenresItem } from "@/types/IGenres";

export const FiltersItem = ({ item }: any) => {
  const { type, icon, href }: GenresItem = { ...item };

  return (
    <Link href={href}>
      <Flex
        p="5px 10px"
        borderRadius="full"
        color="white"
        _hover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
        justifyContent="center"
        alignItems="center"
        fontWeight="400"
        fontSize="14px"
        lineHeight="140%"
        whiteSpace="nowrap"
        maxHeight="30px"
        height="30px"
      >
        <Image src={icon} alt="" width="15px" height="15px" mr="5px" />
        {type}
      </Flex>
    </Link>
  );
};
