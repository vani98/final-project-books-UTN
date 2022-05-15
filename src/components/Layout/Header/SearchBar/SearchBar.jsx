import { useState } from "react";
import { IconSearch } from "../../../../assets/images";
import useApi from "../../../../hooks/useApi";
import * as SC from "./SearchBar.styles.js";
import { useNavigate } from "react-router-dom";

const MAX_AMOUNT_RESULTS = 5;

const SearchBar = () => {
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const [data] = useApi("books.json");

  const searchChange = (e) => {
    setSearchBoxValue(e.target.value);
  };

  const filteredByInput = data
    .filter(
      ({ title, author, published }) =>
        title.toLowerCase().includes(searchBoxValue.toLowerCase().trim()) ||
        author.toLowerCase().includes(searchBoxValue.toLowerCase().trim()) ||
        published.toString().includes(searchBoxValue.toLowerCase().trim())
    )
    .slice(0, MAX_AMOUNT_RESULTS);

  let navigate = useNavigate();
  const handleRedirect = (id) => {
    navigate(`/books/${id}`);
    setSearchBoxValue("");
  };

  return (
    <>
      <SC.SearchContainer>
        <SC.SearchInput
          placeholder="Enter the name of the book..."
          onChange={searchChange}
          value={searchBoxValue}
        />
        <SC.SearchButton src={IconSearch}></SC.SearchButton>
      </SC.SearchContainer>
      {searchBoxValue && (
        <SC.SearchResults>
          {filteredByInput.length > 0 ? (
            filteredByInput.map((book) => (
              <SC.BookFound
                key={book.id}
                onClick={() => handleRedirect(book.id)}
              >
                {book.title}
              </SC.BookFound>
            ))
          ) : (
            <p>Not found</p>
          )}
        </SC.SearchResults>
      )}
    </>
  );
};

export default SearchBar;
