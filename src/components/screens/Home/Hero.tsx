'use client';

import {
  Box,
  Flex,
  Text,
  Link,
  Wrap,
  WrapItem,
  useBreakpointValue,
  Container,
  Button,
} from '@chakra-ui/react';
import Image from 'next/image';

import backgroundImage from '@/public/Hero/slider-bg.png';
import filmTitle from '@/public/Hero/film-logo.png';
import mainCharacter from '@/public/Hero/character.png';

const genres = [
  {
    name: 'Боевик',
    icon: '💣',
    href: '#',
  },
  {
    name: 'Мелодрама',
    icon: '💋',
    href: '#',
  },
  {
    name: 'Драма',
    icon: '😢',
    href: '#',
  },
  {
    name: 'Фэнтези',
    icon: '🧙',
    href: '#',
  },
];

const ratings = [
  {
    rating: '5.6',
    service: 'kinoland',
  },
  {
    rating: '5.6',
    service: 'IMDb',
  },
  {
    rating: '6',
    service: 'КП',
  },
];

const Hero = () => {
  const isSmallScreen = useBreakpointValue({ sm: true, md: false });

  return (
    <Flex
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      background={`linear-gradient(180deg, rgba(15, 13, 24, 0) 0%, rgba(15, 13, 24, 0.84) 100%), linear-gradient(90deg, rgba(15, 13, 24, 0.2) -11.3%, rgba(21, 21, 21, 0) 100%, rgba(15, 13, 24, 0) 100%), url(${backgroundImage.src})`}
      color="white"
      flexWrap="wrap"
    >
      <Wrap className="container" mt="150px">
        <Flex flex="1" flexDirection="column" flexWrap="wrap">
          <Flex flexDirection="column">
            {isSmallScreen && (
              <Image src={mainCharacter} width={300} height={330} alt="" />
            )}
            <Image src={filmTitle} alt="" sizes="100vw" />
          </Flex>
          <Flex>
            {ratings.map((item, id) => (
              <div key={id} className="mb-10 mt-8 mr-9">
                <Text>
                  <b>{item.rating}</b> <span>{item.service}</span>
                </Text>
              </div>
            ))}
          </Flex>

          <Flex gap="15px">
            <Wrap>
              {genres.map((item, id) => (
                <WrapItem key={id}>
                  <div className="hidden lg:flex md:hidden pt-3 pb-3 pr-5 pl-5 rounded-full backdrop-blur-md bg-white/30 flex-nowrap">
                    <Link
                      href={item.href}
                      style={{ transition: 'var(--transition-1)' }}
                    >
                      {item.name} {item.icon}
                    </Link>
                  </div>
                </WrapItem>
              ))}
            </Wrap>
          </Flex>

          <Flex mt="40px">
            <Container>
              <Box fontSize="18px" lineHeight="27px" fontWeight="400">
                Таргариены ведут друг с другом ожесточенную борьбу за Железный
                трон. Самый долгожданный сериал года
              </Box>
            </Container>
          </Flex>

          <Box mt="60px">
            <Button borderRadius={50} pt="25px" pb="25px" pr="60px" pl="60px">
              {' '}
              Страница фильма
            </Button>
          </Box>
        </Flex>

        {!isSmallScreen && (
          <Flex flex="2" flexDirection="column">
            <Box>
              <Image src={mainCharacter} alt="" />
            </Box>
          </Flex>
        )}
      </Wrap>
    </Flex>
  );
};

export default Hero;
