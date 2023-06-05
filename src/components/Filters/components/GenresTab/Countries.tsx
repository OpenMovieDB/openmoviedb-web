import { Text, Grid, Box, GridItem, Divider } from "@chakra-ui/react";
import { FiltersItem } from "../FilterItem/FiltersItem";
import { CountriesData } from "@/src/objects";

export const Countries = () => {
  return (
    <Box>
      <Box mt="20px">
        <Text
          fontWeight="400"
          fontSize="14px"
          lineHeight="140%"
          color="rgba(255, 255, 255, 0.5)"
        >
          Популярные страны
        </Text>

        <Divider mt="10px" />

        <Grid
          mt="20px"
          templateColumns="repeat(5, 1fr)"
          gap="8px"
          width="700px"
          maxHeight="360px"
          maxWidth="700px"
          flexWrap="wrap"
        >
          {CountriesData.map((item, id) => (
            <GridItem key={id}>
              <FiltersItem item={item} />
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box mt="20px">
        <Text
          fontWeight="400"
          fontSize="14px"
          lineHeight="140%"
          color="rgba(255, 255, 255, 0.5)"
        >
          Страны по алфавиту
        </Text>

        <Divider mt="10px" />

        <Grid
          mt="20px"
          templateColumns="repeat(5, 1fr)"
          gap="8px"
          width="700px"
          maxHeight="360px"
          maxWidth="700px"
          overflowY="auto"
          flexWrap="wrap"
        >
          {CountriesData.map((item, id) => (
            <GridItem key={id}>
              <FiltersItem item={item} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
