import { Text, Grid, GridItem } from "@chakra-ui/react";
import { FiltersItem } from "../FilterItem/FiltersItem";
import { PopularGenresData } from "@/src/objects";

export const PopularGenres = () => {
  return (
    <>
      <Text>Популярные жанры</Text>

      <Grid
        templateColumns="repeat(5, 1fr)"
        gap="8px"
        width="700px"
        maxHeight="360px"
        maxWidth="700px"
        overflowY="auto"
        flexWrap="wrap"
      >
        {PopularGenresData.map((item, id) => (
          <GridItem key={id}>
            <FiltersItem item={item} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
