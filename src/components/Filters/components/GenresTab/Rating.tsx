import { useState } from "react";
import {
  Text,
  Flex,
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { FiltersItem } from "../FilterItem/FiltersItem";

const services = [
  {
    name: "Общий",
  },
  {
    name: "Kinopoisk",
  },
  {
    name: "IMDb",
  },
  {
    name: "OpenMovie",
  },
];

export const Rating = () => {
  const [range, setRange] = useState<[number, number]>([2, 4]);

  const handleChange = (newRange: [number, number]) => {
    setRange(newRange);
  };

  return (
    <Box mt="20px">
      <Text
        fontWeight="400"
        fontSize="14px"
        lineHeight="140%"
        color="rgba(255, 255, 255, 0.5)"
      >
        Рейтинг
      </Text>

      <Divider mt="10px" />

      <HStack
        wrap="wrap"
        width="auto"
        justifyContent="center"
        alignItems="center"
        mt="20px"
      >
        {services.map((item, id) => (
          <Box key={id}>
            <FiltersItem item={item} />
          </Box>
        ))}
      </HStack>

      <Flex>
        <RangeSlider
          defaultValue={range}
          min={1}
          max={10}
          onChange={handleChange}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <Text mt={2} ml="20px">
          От {range[0]} до {range[1]}
        </Text>{" "}
      </Flex>
    </Box>
  );
};
