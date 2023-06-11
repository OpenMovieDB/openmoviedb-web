import {
  Box,
  Flex,
  Link,
  Wrap,
  WrapItem,
  useBreakpointValue,
  Container,
  Button,
  Center,
  ButtonGroup,
  Heading,
  Image,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";

import { GenresInline } from "@/components/GenresInline/GenresInline";
import { RatingsColumn } from "@/components/RatingsColumn/RatingsColumn";
import { Vendors } from "./components/Vendors/Vendors";

import { currentFilm } from "@/src/objects";
import { vendorsList } from "@/src/objects";

import image from "@/public/Film/image.png";
import play from "@/public/play.png";

import { IHeroSection, IHeroSectionItem } from "@/types/IHeroSection";

export const HeroFilmSection = ({ item }: IHeroSection) => {
  const {
    filmTitle,
    filmTitleOriginal,
    genres,
    description,
    url,
  }: IHeroSectionItem = { ...item };

  const isSmallScreen = useBreakpointValue({ sm: true, md: false });

  return (
    <>
      {!isSmallScreen && (
        <Box
          minHeight="100vh"
          background={`linear-gradient(180deg, rgba(15, 13, 24, 0) 0%, rgba(15, 13, 24, 0.84) 100%), linear-gradient(90deg, rgba(15, 13, 24, 0.2) -11.3%, rgba(21, 21, 21, 0) 100%, rgba(15, 13, 24, 0) 100%), url(${image.src})`}
          bgRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Flex
            color="white"
            flexWrap="wrap"
            pt={{ lg: "90px", md: "35px", sm: "10px" }}
          >
            <Wrap className="container" mt="70px">
              <Flex flex="1" flexDirection="column" flexWrap="wrap">
                <Flex gap="15px" mb="60px">
                  {genres.map((item, id) => (
                    <GenresInline key={id} item={item} />
                  ))}
                </Flex>

                <Flex flexDirection="column">
                  <Heading size="xl">{filmTitle}</Heading>
                  <Heading size="sm" mt="">
                    {filmTitleOriginal}
                  </Heading>
                </Flex>

                <HStack
                  spacing="20px"
                  fontWeight="400"
                  fontSize="18px"
                  color="rgba(255, 255, 255, 0.5)"
                  mt="35px"
                >
                  <Text>2016</Text>
                  <Text>США</Text>
                  <Text>114 мин. / 01:54</Text>
                </HStack>

                <Flex mt="40px" width="840px">
                  <Text fontSize="18px" fontWeight="400" lineHeight="27px">
                    {description}
                  </Text>
                </Flex>

                <Box mt="30px">
                  <Link href={url} color="rgba(255, 255, 255, 0.5)">
                    <Text fontWeight="400" fontSize="14px" lineHeight="20px">
                      Показать ещё
                    </Text>
                  </Link>
                </Box>

    <VStack spacing="15px" mt="90px">
										{vendorsList.map((item, id) => (
												<Box key={id}>
														<Vendors item={item} /></Box>
))}
										
    </VStack>

              {!isSmallScreen && (
                <Flex flex="2" alignItems="center" justifyContent="center">
                  <Image width="100px" height="125px" src={play.src} alt="" />
                  <VStack ml={{ lg: "340px", md: "280px", sm: "90px" }}>
                    <RatingsColumn ratings={currentFilm.ratings} />
                  </VStack>
                </Flex>
              )}
            </Wrap>
          </Flex>
        </Box>
      )}

      {isSmallScreen && (
        <Wrap className="container" mt="100px">
          <Box flex="1" flexDirection="column" flexWrap="wrap">
            <Box
              backgroundRepeat="no-repeat"
              height="200px"
              background={`url(${image.src})`}
            >
              <Image width="100px" height="125px" src={play.src} alt="" />
            </Box>
            <Flex flexDirection="column">
              <Heading size="xl">{filmTitle}</Heading>
              <Heading size="sm">{filmTitleOriginal}</Heading>
            </Flex>

            <Flex mt="40px">
              <Container>
                <Box fontSize="18px" lineHeight="27px" fontWeight="400">
                  {description}
                </Box>
              </Container>
            </Flex>

            <Box mt="60px">
              <Link href={url} color="gray.400">
                Показать ещё
              </Link>
            </Box>
          </Box>
        </Wrap>
      )}
    </>
  );
};
