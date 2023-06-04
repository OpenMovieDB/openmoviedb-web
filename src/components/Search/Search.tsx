import { useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  List,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useSearch } from "@/hooks/useSearch";
import { useStore } from "@/store/store";
import { BsSearch } from "react-icons/bs";
import { SearchItem } from "./components/SearchItem/SearchItem";

import { ISearchResults } from "@/types/ISearchResults";

export const Search = () => {
  const [query, setQuery] = useState("");
  const results = useSearch(query);
  const setSelectedItem = useStore((state) => state.setSelectedItem);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
  };

  const handleItemClick = (item: ISearchResults) => {
    setSelectedItem(item);
    setQuery("");
  };

  return (
    <Flex
      justifyItems="center"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <InputGroup>
        <Input
          placeholder="Поиск по фильмам"
          padding="20px 25px"
          borderRadius="full"
          maxHeight="67px"
          width={{ lg: "700px", md: "570px", sm: "380px" }}
          height="67px"
          value={query}
          onChange={handleInputChange}
          _focus={{
            background: "white",
            color: "black.600",
          }}
        />
        <InputRightElement width="22px" m="12px 26px">
          <BsSearch />
        </InputRightElement>

        {query && (
          <InputRightElement width="auto" maxWidth="720px" zIndex={100}>
            <List
              bg="#080715"
              borderRadius="35px"
              boxShadow="lg"
              height="360px"
              width="700px"
              maxHeight="360px"
              maxWidth="700px"
              mt="480px"
              overflowY="auto"
            >
              {results.map((item, id) => (
                <Box key={id}>
                  <SearchItem
                    item={item}
                    onClick={() => handleItemClick(item)}
                  />
                </Box>
              ))}
            </List>
          </InputRightElement>
        )}
      </InputGroup>
    </Flex>
  );
};
