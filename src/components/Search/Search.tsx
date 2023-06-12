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
          bg="rgba(255, 255, 255, 0.05)"
          padding="20px 25px"
          border="0px"
          borderRadius="full"
          maxHeight="67px"
          color="#0F0D18"
          width={{ lg: "700px", md: "570px", sm: "380px" }}
          height="67px"
          value={query}
          onChange={handleInputChange}
          _focus={{
            background: "white",
            color: "black.600",
          }}
        />
        <InputRightElement
          width="22px"
          m="12px 26px"
          color="rgba(255, 255, 255, 0.25)"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.9374 3.58301C8.98697 3.58301 7.11641 4.35782 5.73724 5.73699C4.35806 7.11617 3.58325 8.98673 3.58325 10.9372C3.58325 12.8876 4.35806 14.7582 5.73724 16.1374C7.11641 17.5165 8.98697 18.2913 10.9374 18.2913C12.8765 18.2913 14.7366 17.5255 16.1134 16.1614C16.1229 16.1515 16.1325 16.1416 16.1423 16.1318C16.1509 16.1232 16.1597 16.1147 16.1685 16.1063C17.5283 14.7301 18.2916 12.873 18.2916 10.9372C18.2916 8.98673 17.5168 7.11617 16.1376 5.73699C14.7584 4.35782 12.8879 3.58301 10.9374 3.58301ZM19.2452 17.117C20.5661 15.3414 21.2916 13.1767 21.2916 10.9372C21.2916 8.19108 20.2007 5.55746 18.2589 3.61567C16.3171 1.67389 13.6835 0.583008 10.9374 0.583008C8.19132 0.583008 5.5577 1.67389 3.61592 3.61567C1.67413 5.55746 0.583252 8.19108 0.583252 10.9372C0.583252 13.6833 1.67413 16.3169 3.61592 18.2587C5.5577 20.2005 8.19132 21.2913 10.9374 21.2913C13.1801 21.2913 15.3478 20.5638 17.1248 19.2393L20.8133 22.9344C21.3986 23.5207 22.3483 23.5215 22.9346 22.9363C23.5209 22.351 23.5218 21.4013 22.9365 20.815L19.2452 17.117Z"
              fill="black"
              fillOpacity="0.4"
            />
          </svg>
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
              className="scrollbar"
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
