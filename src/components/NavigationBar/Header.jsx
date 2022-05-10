import * as SC from "./Header.styles";
import { IconLogo } from "../../assets/images";
import SearchBar from "../SearchBar";
import SVGIcon from "../SVGIcon";
import themes from "../../themes";
import ShoppingCart from "../ShoppingCart";

const Header = () => {
  return (
    <SC.Header>
      <SC.NavLink to="/">
        <SVGIcon src={IconLogo} color={themes.colors.orange[0]} size="6rem" />
      </SC.NavLink>
      <SC.RightContainer>
        <ul>
          <SC.NavLink to="/">Home</SC.NavLink>
          <SC.NavLink to="/books">Books</SC.NavLink>
          <SC.NavLink to="/editorials">Editorials</SC.NavLink>
          <SC.NavLink to="/about-us">About Us</SC.NavLink>
        </ul>
        <SearchBar />
        <ShoppingCart />
      </SC.RightContainer>
    </SC.Header>
  );
};

export default Header;
