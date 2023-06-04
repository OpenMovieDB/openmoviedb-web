import { Box, Text, useBreakpointValue, Grid } from "@chakra-ui/react";
import { FactElement } from "./components/FactElement";
import { factsList } from "@/src/objects";

export const FactsSection = () => {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box className="container" alignItems="start">
      <Text fontSize="40px" fontWeight="800" lineHeight="41px">
        Знаете ли вы, что...
      </Text>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={[4, 6]}
        mt="70px"
      >
        {factsList.map((item, id) => (
          <Box key={id}>
            <FactElement item={item} />
          </Box>
        ))}
      </Grid>

      {/* {!isSmallScreen && (
					)} */}
    </Box>
  );
};
