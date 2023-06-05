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
} from "@chakra-ui/react";

export const Year = () => {
  const [range, setRange] = useState<[number, number]>([1970, 2023]);

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
        Год
      </Text>

      <Divider mt="10px" />

      <Flex>
        <RangeSlider
          defaultValue={range}
          min={1895}
          max={2023}
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
