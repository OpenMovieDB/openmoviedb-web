import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";

export const AccountSettingsSection = () => {
  return (
    <Flex>
      <Heading fontWeight="800" fontSize="40px" lineHeight="41px">
        Настройки аккаунта
      </Heading>
      <Box>
        <Text>E-mail</Text>
        <Input placeholder="Введите e-mail" variant="flushed" />
      </Box>
    </Flex>
  );
};
