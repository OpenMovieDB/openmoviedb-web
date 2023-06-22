import Rating from "@/components/Rating/Rating";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  ListItem,
  Spacer,
} from "@chakra-ui/react";

interface ISearchItemItem {
  image?: any;
  title?: string;
  type?: string;
  year?: string;
  rating: number;
}

interface ISearchItem {
  item: ISearchItemItem;
  onClick?: any;
}

export const SearchItem = ({ item, onClick }: ISearchItem) => {
  const { image, title, type, year, rating }: ISearchItemItem = { ...item };

  return (
    <ListItem
      cursor="pointer"
      color="white"
      zIndex={100}
      onClick={onClick}
      borderRadius="35px"
      p="20px 10px 20px 25px"
      m="10px"
      _hover={{
        background: "#141321",
        color: "white",
      }}
    >
      <Flex
        maxWidth="690px"
        maxHeight="140px"
        alignItems="center"
        justifyContent="center"
        justifyItems="center"
      >
        <Box mr="10px">
          <Image src={image} alt="" width="70px" height="100px" />
        </Box>
        <Box>
          <Heading fontWeight="400" fontSize="18px">
            {title}
            {"\n"}
          </Heading>
          <Text
            fontWeight="400"
            fontSize="14px"
            color="rgba(255, 255, 255, 0.5)"
            mt="5px"
          >
            {type}, {year}
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Rating rating={rating} hasBg={false} />
        </Box>
      </Flex>
    </ListItem>
  );
};
