import { IconSearch } from "../../../../assets/images";
import * as SC from "./SearchBar.styles.js";

const SearchBar = () => {
  return (
    <SC.SearchContainer>
      <SC.SearchInput placeholder="Enter the name of the book..."></SC.SearchInput>
      <SC.SearchButton src={IconSearch}></SC.SearchButton>
    </SC.SearchContainer>
  );
};

export default SearchBar;
