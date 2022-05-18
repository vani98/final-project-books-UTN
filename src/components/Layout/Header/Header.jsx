import * as SC from "./Header.styles";
import { IconLogo, IconShoppingCart } from "../../../assets/images";
import SearchBar from "./SearchBar";
import SVGIcon from "../../SVGIcon";
import themes from "../../../themes";
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
        <SC.ToCart to="/cart">
          <SVGIcon src={IconShoppingCart} color="black" size="2.9rem" />
        </SC.ToCart>
      </SC.Navigation>
    </SC.Container>
  );
};

export default Header;
