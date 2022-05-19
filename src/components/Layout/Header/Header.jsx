import * as SC from "./Header.styles";
import {
  IconLogo,
  IconShoppingCart,
  IconLogin,
  IconMenu,
} from "../../../assets/images";
import SearchBar from "./SearchBar";
import SVGIcon from "../../SVGIcon";
import themes from "../../../themes";
import { Link } from "react-router-dom";
import { LOGGED_USER } from "../../../pages/Login/utils";
import { useState } from "react";

const Header = () => {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState("none");
  const userValues = JSON.parse(localStorage.getItem(LOGGED_USER));
  const initial = !!userValues && userValues.user.charAt(0);

  const handleUserSettings = () => {
    isSettingOpen ? setIsSettingOpen(false) : setIsSettingOpen(true);
  };
  const handleLogOut = () => {
    localStorage.removeItem(LOGGED_USER);
  };
  const handleMenuClick = () => {
    menuOpen == "none" ? setMenuOpen("flex") : setMenuOpen("none");
  };

  return (
    <SC.Wrapper>
      <Link to="/">
        <SC.LogoCompany
          src={IconLogo}
          color={themes.colors.primary}
          size="6rem"
        />
      </Link>
      <SC.Container>
        <SC.Navigation display={menuOpen}>
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
            <SC.NavLink to="/about-us">About us</SC.NavLink>
          </li>
        </SC.Navigation>

        <SearchBar />
        <SC.ToCart to="/cart">
          <SVGIcon src={IconShoppingCart} color="black" size="2.9rem" />
        </SC.ToCart>
        {!!userValues ? (
          <>
            <SC.UserIcon onClick={handleUserSettings}>{initial}</SC.UserIcon>
            {isSettingOpen && (
              <>
                <SC.UserSettigs>
                  <p>
                    Hello <span>{!!userValues && userValues.user}</span>!
                  </p>
                  <Link to="/" onClick={handleLogOut}>
                    Log out?
                  </Link>
                </SC.UserSettigs>
                <SC.Triangle></SC.Triangle>
              </>
            )}
          </>
        ) : (
          <SC.LoginIcon to="/login">
            <SVGIcon src={IconLogin} color="black" size="2.9rem" />
          </SC.LoginIcon>
        )}
        <SC.Menu
          src={IconMenu}
          color="black"
          size="3.2rem"
          onClick={handleMenuClick}
        ></SC.Menu>
      </SC.Container>
    </SC.Wrapper>
  );
};

export default Header;
