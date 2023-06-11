import { Flex, Text } from "@chakra-ui/react";
import { Spoiler } from "@/components/Spoiler/Spoiler";
import { IFactElement } from "@/types/IFactElement";

export const FactElement = ({ item }: IFactElement) => {
  const { index, text, isSpoiler } = { ...item };

  return (
    <Flex>
      <Flex
        bgColor="#141321"
        borderRadius="15px"
        maxWidth="100px"
        maxHeight="100px"
        justifyContent="center"
        alignItems="center"
        mr="30px"
      >
        <Text fontWeight="400" fontSize="40px" lineHeight="41px">
          {index}
        </Text>
      </Flex>
      <Spoiler>{text}</Spoiler>
    </Flex>
  );
};
