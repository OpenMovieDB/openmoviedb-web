import {
  Image,
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  Text,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import Rating from "../Rating/Rating";

interface MovieCardProps {
  onClick?: ReactNode;
  props?: ReactNode;
}

export const MovieCard: FC<MovieCardProps> = (onClick, props) => {
  return (
    <Box
      onClick={onClick}
      {...props}
      style={{
        width: "405px",
        height: "216px",
        padding: "20px",
        borderRadius: "15px",
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(${item.image})`,
        objectFit: "contain",
        backgroundSize: "cover",
      }}
    >
      <Box>
        <Rating rating={item.rating} />
        <Text
          position="absolute"
          bottom="20px"
          left="20px"
          fontSize="14px"
          fontWeight="800"
          lineHeight="14px"
        >
          {item.title}
        </Text>
      </Box>
    </Box>
  );
};

/* onClick={() => {
 * 		setActiveIndex(id);
 * 		setActiveItem(item);
 * }} */
