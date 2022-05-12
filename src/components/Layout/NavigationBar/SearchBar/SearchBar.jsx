import { useState } from "react";
import { IconSearch } from "../../../../assets/images";
import useApi from "../../../../hooks/useApi";
import * as SC from "./SearchBar.styles.js";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [data, isLoading] = useApi("books.json");

  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  const titleFiltered =
    search &&
    data
      .filter(({ title }) =>
        title.toLowerCase().startsWith(search.toLowerCase().trim())
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
      {/* <SC.SearchResults>
        <p>uno</p>
        <p>dos</p>
        <p>tres</p>
      </SC.SearchResults> */}
    </>
  );
};

export default SearchBar;
