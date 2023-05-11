import {
  Box,
  Flex,
  Button,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FiltersMenuButton } from "./components/FiltersMenuButton";

const Filters = () => {
  return (
    <Box
      position="fixed"
      margin="auto"
      left="50%"
      bottom="30px"
      transform="translate(-50%, -50%)"
    >
      <Flex
        bg="rgba(0, 0, 0, 0.4)"
        backdropFilter="blur(7.5px)"
        borderRadius="15px"
        p="10px"
        justifyContent="center"
        alignItems="center"
      >
        <Box mr="25px">
          <Flex>
            <Box>Logo</Box>
          </Flex>
        </Box>
        <Box bg="#080715" borderRadius="10px" p="15px 18px 15px 18px">
          <Menu>
            <FiltersMenuButton title="Жанр" />
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem onClick={() => alert("Kagebunshin")}>
                Create a Copy
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <FiltersMenuButton title="Сортировать" />
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem onClick={() => alert("Kagebunshin")}>
                Create a Copy
              </MenuItem>
            </MenuList>
          </Menu>

          <FiltersMenuButton title="Год" />
          <FiltersMenuButton title="Рейтинг" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Filters;
