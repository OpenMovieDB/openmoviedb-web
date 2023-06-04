import { useRef } from "react";
import {
  Box,
  Flex,
  Spacer,
  Text,
  useBreakpointValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { ActorsCard } from "./components/ActorsCard/ActorsCard";

// write actorsList
import { actorsList, movieAuthorsList } from "@/src/objects";
import { Slider } from "@/components/Slider/Slider";

interface MovieAuthor {
  name: string;
  url: string;
}

interface MovieAuthorsList {
  director: MovieAuthor[];
  script: MovieAuthor[];
  producer: MovieAuthor[];
  operator: MovieAuthor[];
  composer: MovieAuthor[];
  artist: MovieAuthor[];
}

export const ActorsSection = () => {
  return (
    <Box className="container" alignItems="center">
      <Text fontSize="40px" fontWeight="800" lineHeight="41px">
        Актеры и съёмочная группа:
      </Text>

      <Box>
        <Slider
          isWheel
          marginTop={10}
          titleMargin={60}
          arrowMargin={20}
          title=" "
        >
          {" "}
          {actorsList.map((item, id) => (
            <Box key={id + 1}>
              <ActorsCard item={item} />
            </Box>
          ))}
        </Slider>
      </Box>

      <Flex flexWrap="wrap" mt="60px">
        <Box>
          <Box mb="30px">
            <Text
              fontWeight="400"
              fontSize="18px"
              lineHeight="150%"
              color="rgba(255, 255, 255, 0.5)"
            >
              режиссёр:
            </Text>
            <Flex>
              {movieAuthorsList.director.map((item, id) => (
                <Text>{item.name},</Text>
              ))}
            </Flex>
          </Box>
          <Box mb="30px">
            <Text
              fontWeight="400"
              fontSize="18px"
              lineHeight="150%"
              color="rgba(255, 255, 255, 0.5)"
            >
              сценарий:
            </Text>
            <Flex>
              {movieAuthorsList.script.map((item, id) => (
                <Text>{item.name},</Text>
              ))}
            </Flex>
          </Box>
          <Box mt="30px">
            <Text
              fontWeight="400"
              fontSize="18px"
              lineHeight="150%"
              color="rgba(255, 255, 255, 0.5)"
            >
              продюсер:
            </Text>
            <Flex>
              {movieAuthorsList.producer.map((item, id) => (
                <Text>{item.name}, </Text>
              ))}
            </Flex>
          </Box>
        </Box>
        <Spacer />
        <Box>
          <Box mb="30px">
            <Text
              fontWeight="400"
              fontSize="18px"
              lineHeight="150%"
              color="rgba(255, 255, 255, 0.5)"
            >
              оператор:
            </Text>
            <Flex>
              {movieAuthorsList.operator.map((item, id) => (
                <Text>{item.name},</Text>
              ))}
            </Flex>
          </Box>
          <Box mb="30px">
            <Text
              fontWeight="400"
              fontSize="18px"
              lineHeight="150%"
              color="rgba(255, 255, 255, 0.5)"
            >
              композитор:
            </Text>
            <Flex>
              {movieAuthorsList.composer.map((item, id) => (
                <Text>{item.name},</Text>
              ))}
            </Flex>
          </Box>
          <Box mb="30px">
            <Text
              fontWeight="400"
              fontSize="18px"
              lineHeight="150%"
              color="rgba(255, 255, 255, 0.5)"
            >
              художник:
            </Text>
            <Flex>
              {movieAuthorsList.artist.map((item, id) => (
                <Text>{item.name}, </Text>
              ))}
            </Flex>
          </Box>
        </Box>
        <Spacer />
      </Flex>
    </Box>
  );
};
