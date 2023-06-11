import { Box, Flex, VStack, Image, Text } from "@chakra-ui/react";

import { IVendorItem, IVendors } from "@/types/IVendorItem";

export const Vendors = ({ item }: IVendors) => {
  const { icon, title }: IVendorItem = { ...item };

  return (
    <Box>
      <Image src={icon} alt="" />
      <Text fontWeight="400" fontSize="16px" lineHeight="24px">
        {title}
      </Text>
    </Box>
  );
};
