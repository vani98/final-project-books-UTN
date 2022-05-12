import { useState } from "react";
import { IconSearch } from "../../../../assets/images";
import useApi from "../../../../hooks/useApi";
import * as SC from "./SearchBar.styles.js";

const MAX_AMOUNT_RESULTS = 5;

const SearchBar = () => {
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const [data, isLoading] = useApi("books.json");

  const searchChange = (e) => {
    setSearchBoxValue(get.value);
  };

  const filteredByInput = data
    .filter(
      ({ title, author, published }) =>
        title.toLowerCase().includes(searchBoxValue.toLowerCase().trim()) ||
        author.toLowerCase().includes(searchBoxValue.toLowerCase().trim()) ||
        published.toString().includes(searchBoxValue.toLowerCase().trim())
    )
    .slice(0, MAX_AMOUNT_RESULTS);

  return (
    <>
      <SC.SearchContainer>
        <SC.SearchInput
          placeholder="Enter the name of the book..."
          onChange={searchChange}
        />
        <SC.SearchButton src={IconSearch}></SC.SearchButton>
      </SC.SearchContainer>
      {searchBoxValue && (
        <SC.SearchResults>
          {filteredByInput.length > 0 ? (
            filteredByInput.map((book) => <p key={book.id}>{book.title}</p>)
          ) : (
            <p>Not found</p>
          )}
        </SC.SearchResults>
      )}
    </>
  );
};

export default SearchBar;
