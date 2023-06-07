import {
  Box,
  Flex,
  Link,
  Wrap,
  useBreakpointValue,
  Container,
  Button,
  Center,
  Image,
} from "@chakra-ui/react";

import { RatingInline } from "@/components/RatingInline/RatingInline";
import { GenresInline } from "../GenresInline/GenresInline";
import { IHeroSection, IHeroSectionItem } from "@/types/IHeroSection";

export const HeroSection = ({ item }: IHeroSection) => {
  const {
    filmTitleImage,
    filmCharacterImage,
    filmBackground,
    description,
    url,
    ratings,
    charactersList,
    genres,
  }: IHeroSectionItem = { ...item };

  const isSmallScreen = useBreakpointValue({ sm: true, md: false });

  return (
    <Box
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      background={`linear-gradient(180deg, rgba(15, 13, 24, 0) 0%, rgba(15, 13, 24, 0.84) 100%), linear-gradient(90deg, rgba(15, 13, 24, 0.2) -11.3%, rgba(21, 21, 21, 0) 100%, rgba(15, 13, 24, 0) 100%), url(${filmBackground})`}
      backgroundRepeat="no-repeat"
      justifyContent="center"
      alignItems="center"
    >
      <Flex color="white" flexWrap="wrap">
        <Wrap className="container" mt="150px">
          <Flex flex="1" flexDirection="column" flexWrap="wrap">
            <Flex flexDirection="column">
              {isSmallScreen && <Image src={filmCharacterImage} alt="" />}
              <Image
                src={filmTitleImage}
                alt=""
                minWidth="840px"
                minHeight="220px"
              />

              <Flex>
                {ratings?.map((item, id) => (
                  <RatingInline item={item} key={id} />
                ))}
              </Flex>

              <Flex gap="30px">
                {genres.map((item, id) => (
                  <Box key={id}>
                    <Wrap>
                      <GenresInline item={item} />
                    </Wrap>
                  </Box>
                ))}
              </Flex>

              <Flex mt="40px">
                <Box
                  fontSize="18px"
                  lineHeight="27px"
                  fontWeight="400"
                  maxWidth="840px"
                >
                  {description}
                </Box>
              </Flex>
            </Flex>

            <Box mt="140px">
              <Link href={url}>
                <Button borderRadius="full" p="40px 70px">
                  Страница фильма
                </Button>
              </Link>
            </Box>
          </Flex>

          {!isSmallScreen && (
            <Flex flex="2" flexDirection="column">
              <Box ml="30px">
                <Image
                  src={filmCharacterImage}
                  width="840px"
                  height="778px"
                  alt=""
                />
              </Box>
            </Flex>
          )}
        </Wrap>
      </Flex>
      <Flex
        position="relative"
        bottom="80px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.05)"
        backdropFilter="blur(7.5px)"
        p="15px 0px"
        className="lg:flex md:flex pt-4 pb-4"
        justifyContent="center"
        alignItems="center"
        maxWidth="95%"
      >
        {charactersList?.map((item, id) => (
          <Flex key={id} alignItems="center" justifyContent="center" mr="30px">
            <Box mr="15px">
              <Image src={item.image} width={46} height={46} alt="" />
            </Box>
            <Box>
              {item.firstName} {item.lastName}
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
