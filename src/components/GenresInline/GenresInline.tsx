import { Flex, Wrap, WrapItem, Link, Text } from "@chakra-ui/react";

import { GenresProps } from "@/types/IGenres";

export const GenresInline = ({ item }: GenresProps) => {
  const { name, icon, href }: any = { ...item };

  return (
    <Flex gap="15px">
      <Wrap>
        <WrapItem>
          <div className="pt-3 pb-3 pr-5 pl-5 rounded-full bg-white/30">
            <Link href={href}>
              <Text>
                {name} {icon}
              </Text>
            </Link>
          </div>
        </WrapItem>
      </Wrap>
    </Flex>
  );
};
