import { FC } from "react";
import { Box, Button } from "@chakra-ui/react";
import { css } from "@emotion/react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  props: any;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  children,
  onClick = () => {},
  props,
}) => {
  return (
    <Button
      bg="transparent"
      borderRadius="50px"
      border="2px solid"
      borderColor="radial-gradient(100% 376.62% at 100% 0%, #00F0FF 0%, #BD00FF 45.31%, #0500FF 100%)"
      color="#FFFFFF"
      padding="25px 60px"
      position="relative"
      _before={{
        content: "''",
        position: "absolute",
        borderRadius: "inherit",
        top: "-2px",
        right: "-2px",
        bottom: "-2px",
        left: "-2px",
        borderImageSource:
          "radial-gradient(100% 376.62% at 100% 0%, #00F0FF 0%, #BD00FF 45.31%, #0500FF 100%)",
        borderImageSlice: "1",
        zIndex: "-1",
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};
