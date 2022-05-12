import { useState } from "react";
import { IconSearch } from "../../../../assets/images";
import useApi from "../../../../hooks/useApi";
import * as SC from "./SearchBar.styles.js";

const MAX_AMOUNT_RESULTS = 5;

const SearchBar = () => {
  const [search, setSearch] = useState("");
  // const [searchBoxValue, setSearchBoxValue] = useState("");
  const [data, isLoading] = useApi("books.json");

  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  // filteredByTitle, dataFilteredByTitle
  const titleFiltered =
    search.trim() &&
    data
      .filter(
        ({ title, author, published }) =>
          title.toLowerCase().includes(search.toLowerCase().trim()) ||
          author.toLowerCase().includes(search.toLowerCase().trim()) ||
          published.toString().includes(search.toLowerCase().trim())
      )
      .map((book) => book.title);

  return (
    <>
      <SC.SearchContainer>
        <SC.SearchInput
          placeholder="Enter the name of the book..."
          onChange={searchChange}
        />
        <SC.SearchButton src={IconSearch}></SC.SearchButton>
      </SC.SearchContainer>
      {!!titleFiltered && (
        <SC.SearchResults>
          {titleFiltered.slice(0, MAX_AMOUNT_RESULTS).map((result) => (
            <p>{result}</p>
          ))}
        </SC.SearchResults>
      )}
    </>
  );
};

export default SearchBar;
