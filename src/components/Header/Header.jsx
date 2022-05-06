import * as SC from "./Header.styles";
import { IconLogo } from "../../assets/images";
import SearchBar from "../SearchBar";
import SVGIcon from "../SVGIcon";
import themes from "../../themes";

const Header = () => {
  return (
    <SC.Header>
      <a href="/">
        <SVGIcon src={IconLogo} color={themes.colors.orange[0]} size="6rem" />
      </a>
      <SC.RightContainer>
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
        <SC.SCart />
      </SC.RightContainer>
    </SC.Header>
  );
};

export default Header;
