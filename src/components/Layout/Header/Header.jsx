import * as SC from "./Header.styles";
import { IconLogo } from "../../../assets/images";
import SearchBar from "./SearchBar";
import SVGIcon from "../../SVGIcon";
import themes from "../../../themes";
import ShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <SC.Container>
      <Link to="/">
        <SVGIcon src={IconLogo} color={themes.colors.primary} size="6rem" />
      </Link>

      <SC.Navigation>
        <ul>
          <li>
            <SC.NavLink to="/">Home</SC.NavLink>
          </li>
          <li>
            <SC.NavLink to="/books">Books</SC.NavLink>
          </li>
          <li>
            <SC.NavLink to="/editorials">Editorials</SC.NavLink>
          </li>
          <li>
            <SC.NavLink to="/about-us">About Us</SC.NavLink>
          </li>
        </ul>

        <SearchBar />

        <Link to="/cart">
          <ShoppingCart />
        </Link>
      </SC.Navigation>
    </SC.Container>
  );
};

export default Header;
