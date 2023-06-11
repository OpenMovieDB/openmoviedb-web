import { Box, Flex, VStack, Image, Text } from "@chakra-ui/react";

import { IVendorItem, IVendors } from "@/types/IVendorItem";

export const Vendors = ({ item }: IVendors) => {
  const { icon, title }: any = { ...item };

  return (
    <Flex alignItems="center">
      <Image width="35px" height="35px" mr="15px" src={icon} alt="" />
      <Text fontWeight="400" fontSize="16px" lineHeight="24px">
        {title}
      </Text>
    </Flex>
  );
};
