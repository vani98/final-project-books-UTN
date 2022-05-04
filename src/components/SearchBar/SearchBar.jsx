import * as SC from "./SearchBar.styles.js";
import images from "../../../assets/images";

const SearchBar = () => {
  return (
    <SC.SearchContainer>
      <SC.SearchInput placeholder="Enter the name of the book..."></SC.SearchInput>
      <SC.SearchButton src={images.searchIcon}></SC.SearchButton>
    </SC.SearchContainer>
  );
};

export default SearchBar;
