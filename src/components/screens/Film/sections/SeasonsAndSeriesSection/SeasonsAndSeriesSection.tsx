import { useRef } from "react";
import {
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";

import { SeriesCard } from "./components/SeriesCard/SeriesCard";

import { seriesList } from "@/src/objects";
import { Slider } from "@/components/Slider/Slider";

export const SeasonsAndSeriesSection = () => {
  return (
    <Box className="container" alignItems="center">
      <Text fontSize="40px" fontWeight="800" lineHeight="41px">
        Сезоны и серии:
      </Text>

      <Tabs variant="unstyled" mt="70px">
        <Flex alignItems="center">
          <Text mr="25px">Сезон</Text>
          <TabList>
            <Tab
              _selected={{
                color: "black",
                bg: "#FFFFFF",
                borderRadius: "50px",
              }}
              mr="10px"
            >
              1
            </Tab>
            <Tab
              _selected={{
                color: "black",
                bg: "#FFFFFF",
                borderRadius: "50px",
              }}
            >
              2
            </Tab>
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel>
            <Box>
              <Slider
                isWheel
                marginTop={10}
                titleMargin={60}
                arrowMargin={20}
                title=" "
              >
                {" "}
                {seriesList.map((item, id) => (
                  <Box key={id + 1}>
                    <SeriesCard item={item} />
                  </Box>
                ))}
              </Slider>
            </Box>
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
