import * as SC from "./Header.styles";
import images from "../../../assets/images";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <SC.Header>
      <a href="/">
        <SC.Logo src={images.logo} alt="logo" />
      </a>
      <SC.ListAndSearch>
        <SC.List>
          <SC.ListItem>
            <a href="/">Home</a>
          </SC.ListItem>
          <SC.ListItem>
            <a href="/books">Books</a>
          </SC.ListItem>
          <SC.ListItem>
            <a href="/editorials">Editorials</a>
          </SC.ListItem>
          <SC.ListItem>
            <a href="/about-us">About Us</a>
          </SC.ListItem>
        </SC.List>
        <SearchBar />
      </SC.ListAndSearch>
    </SC.Header>
  );
};

export default Header;
