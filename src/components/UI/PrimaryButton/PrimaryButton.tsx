import { FC } from "react";
import { Box, Button } from "@chakra-ui/react";
import { css } from "@emotion/react";

interface PrimaryButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    isLoading?: boolean;
    type?: "button" | "reset" | "submit";
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({
    children,
    onClick = () => { },
    isLoading,
    type,
}) => {
    return (
        <div
            className="w-[284px] h-[77px] px-[60px] py-[25px] rounded-[47px] border border border border justify-center items-center gap-[10px] inline-flex"
            onClick={onClick}
        //isLoading={isLoading}
        //type={type}
        >
            <div className="text-center text-white text-[18px] font-normal leading-relaxed">
                {children}
            </div>
        </div>
    );
};

/* <Button
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
    isLoading={isLoading}
    type={type}
    >
    {children}
    </Button>
    */
