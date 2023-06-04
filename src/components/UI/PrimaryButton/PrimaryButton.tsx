import { FC } from "react";
import { Box, Button } from "@chakra-ui/react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

/* <Button
 *   border="2px solid"
 *   borderImageSource="radial-gradient(100% 376.62% at 100% 0%, #00F0FF 0%, #BD00FF 45.31%, #0500FF 100%)"
 *   colorScheme="purple"
 *   onClick={onClick}
 * >
 *   {children}
 * </Button> */

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  children,
  onClick = () => {},
}) => {
  return (
    <Box
      style={{
        border: "solid 2px",
        borderImageSource:
          "radial-gradient(100% 376.62% at 100% 0%, #00F0FF 0%, #BD00FF 45.31%, #0500FF 100%)",
        width: "220px",
        minHeight: "77px",
        padding: "25px 60px",
        borderImageSlice: "1",
        justifyContent: "center",
        borderRadius: "100%",
        alignItems: "center",
      }}
      borderRadius="full"
      onClick={onClick}
    >
      {children}
    </Box>
  );
};
