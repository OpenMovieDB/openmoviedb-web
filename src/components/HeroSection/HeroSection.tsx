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
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      background={`linear-gradient(180deg, rgba(15, 13, 24, 0) 0%, rgba(15, 13, 24, 0.84) 100%), linear-gradient(90deg, rgba(15, 13, 24, 0.2) -11.3%, rgba(21, 21, 21, 0) 100%, rgba(15, 13, 24, 0) 100%), url(${filmBackground})`}
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

              <Flex gap="15px">
                {genres.map((item, id) => (
                  <Box key={id}>
                    <GenresInline item={item} />
                  </Box>
                ))}
              </Flex>

              <Flex mt="40px">
                <Container>
                  <Box fontSize="18px" lineHeight="27px" fontWeight="400">
                    {description}
                  </Box>
                </Container>
              </Flex>
            </Flex>

            <Box mt="180px">
              <Link href={url}>
                <Button borderRadius={50} p="25px 60px">
                  {" "}
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
      <Center>
        <div className="hidden lg:flex md:flex pt-4 pb-4 rounded-full bg-black">
          {charactersList?.map((item, id) => (
            <div
              key={id}
              className="mr-4 flex items-center content-center gap-2"
            >
              <div>
                <Image src={item.image} width={46} height={46} alt="" />
              </div>
              <div>
                {item.firstName} {item.lastName}
              </div>
            </div>
          ))}
        </div>
      </Center>
    </Box>
  );
};
