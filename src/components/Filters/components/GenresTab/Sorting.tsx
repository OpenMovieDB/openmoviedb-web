import { Text, Grid, Box, GridItem, Divider, HStack } from "@chakra-ui/react";
import { FiltersItem } from "../FilterItem/FiltersItem";
import { PopularGenresData } from "@/src/objects";

const sortBy = [
  {
    name: "Рейтингу",
  },
  {
    name: "Популярности",
  },
  {
    name: "Дате",
  },
];

const showOnly = [
  {
    name: "Всё",
  },
  {
    name: "Фильмы",
  },
  {
    name: "Сериалы",
  },
];

export const Sorting = () => {
  return (
    <Box>
      <Box mt="20px">
        <Text
          fontWeight="400"
          fontSize="14px"
          lineHeight="140%"
          color="rgba(255, 255, 255, 0.5)"
        >
          Сортировать по
        </Text>

        <Divider mt="10px" />

        <HStack wrap="wrap" width="auto">
          {sortBy.map((item, id) => (
            <Box key={id}>
              <FiltersItem item={item} />
            </Box>
          ))}
        </HStack>
      </Box>
      <Box mt="20px">
        <Text
          fontWeight="400"
          fontSize="14px"
          lineHeight="140%"
          color="rgba(255, 255, 255, 0.5)"
        >
          Показывать
        </Text>

        <Divider mt="10px" />

        <HStack wrap="wrap">
          {showOnly.map((item, id) => (
            <Box key={id}>
              <FiltersItem item={item} />
            </Box>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};
