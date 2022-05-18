import * as SC from "./Header.styles";
import { IconLogo, IconShoppingCart } from "../../../assets/images";
import SearchBar from "./SearchBar";
import SVGIcon from "../../SVGIcon";
import themes from "../../../themes";
import { Link } from "react-router-dom";
import { LOGGED_USER } from "../../../pages/Login/utils";

const Header = () => {
  const userValues = JSON.parse(localStorage.getItem(LOGGED_USER));
  const initial = !!userValues ? userValues.user.charAt(0) : "";

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

        {!!userValues ? (
          <SC.UserIcon>{initial}</SC.UserIcon>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </SC.Navigation>
    </SC.Container>
  );
};

export default Header;
