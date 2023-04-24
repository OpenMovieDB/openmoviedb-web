import { PropsWithChildren, ReactNode, FC } from "react";
import { Box, Flex, Wrap, WrapItem, Link } from "@chakra-ui/react";

interface GenresProps {
  data: {
    genres: {
      name: string;
      href: string;
      icon: string;
    };
  };
  className?: string;
  props?: ReactNode;
}

export const Genres: FC<PropsWithChildren<GenresProps>> = ({
  data,
  className,
}) => {
  console.log(data);

  return (
    <>
      {data.genres.map((item, idx) => {
        const { name, icon, href }: any = { ...item };
        return (
          <Flex gap="15px" className={className}>
            <Wrap>
              <WrapItem>
                <div className="pt-3 pb-3 pr-5 pl-5 rounded-full bg-white/30">
                  <Link href={href}>
                    {name} {icon}
                  </Link>
                </div>
              </WrapItem>
            </Wrap>
          </Flex>
        );
      })}
    </>
  );
};