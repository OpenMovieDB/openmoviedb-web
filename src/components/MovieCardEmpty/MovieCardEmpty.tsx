import { Flex, Box, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface MovieCardEmptyProps {
  children: ReactNode;
  props?: ReactNode;
}

export const MovieCardEmpty: FC<MovieCardEmptyProps> = ({
  props,
  children,
}) => {
  return (
    <Flex
      width="calc(20% - 40px)"
      minWidth="230px"
      height="216px"
      padding="20px"
      borderRadius="15px"
      bg="gray.700"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {children}
    </Flex>
  );
};
