import { Flex, Image, Text } from "@chakra-ui/react";
import { IGenresCard } from "./IGenresCard";

export const GenresCard = ({ item }: IGenresCard) => {
  const { icon, type } = { ...item };

  return (
    <Flex
      height={{ xl: "260px", md: "207px", sm: "116px" }}
      width={{ xl: "260px", md: "207px", sm: "116px" }}
      minHeight={{ xl: "260px", md: "207px" }}
      minWidth={{ xl: "260px", md: "207px" }}
      borderRadius="15px"
      bgColor="rgba(255, 255, 255, 0.05)"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Image
        src={icon}
        width={{ xl: "130px", md: "147px", sm: "76px" }}
        height={{ xl: "145px", md: "92px", sm: "31px" }}
        alt=""
      />
      <Text as="b">{type}</Text>
    </Flex>
  );
};
