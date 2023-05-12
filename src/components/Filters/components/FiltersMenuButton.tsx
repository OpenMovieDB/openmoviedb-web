import { Button, MenuButton } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { FiltersMenuButtonProps } from "./IFiltersMenuButton";

export const FiltersMenuButton = ({ title }: FiltersMenuButtonProps) => {
  return (
    <MenuButton
      transition="all 0.2s"
      _hover={{ bg: "#141321" }}
      _expanded={{ bg: "#141321" }}
      _focus={{ boxShadow: "outline" }}
      mr="10px"
    >
      {title} <ChevronDownIcon />
    </MenuButton>
  );
};
