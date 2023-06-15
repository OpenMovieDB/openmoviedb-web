import { Button, MenuButton } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { FiltersMenuButtonProps } from "./IFiltersMenuButton";

export const FiltersMenuButton = ({
    title,
    onClick,
}: FiltersMenuButtonProps) => {
    return (
        <MenuButton
            transition="all 0.2s"
            p="16px 15px"
            _hover={{ bg: "#141321" }}
            _expanded={{ bg: "#141321" }}
            _focus={{ boxShadow: "outline" }}
            onClick={onClick}
            borderRadius="10px"
            mr="10px"
        >
            {title} <ChevronDownIcon />
        </MenuButton>
    );
};
