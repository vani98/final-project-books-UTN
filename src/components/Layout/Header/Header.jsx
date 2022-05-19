import * as SC from "./Header.styles";
import { IconLogo, IconShoppingCart, IconLogin } from "../../../assets/images";
import SearchBar from "./SearchBar";
import SVGIcon from "../../SVGIcon";
import themes from "../../../themes";
import { Link } from "react-router-dom";
import { LOGGED_USER } from "../../../pages/Login/utils";
import { useState } from "react";

const Header = () => {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const userValues = JSON.parse(localStorage.getItem(LOGGED_USER));
  const initial = !!userValues && userValues.user.charAt(0);

  const handleUserSettings = () => {
    isSettingOpen ? setIsSettingOpen(false) : setIsSettingOpen(true);
  };
  const handleLogOut = () => {
    localStorage.removeItem(LOGGED_USER);
  };

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
          <SVGIcon
            src={IconShoppingCart}
            color="black"
            size="2.9rem"
            hoverBgColor={themes.colors.primary}
          />
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
          <SC.LoginLink to="/login">
            <SVGIcon
              src={IconLogin}
              color="black"
              size="2.9rem"
              hoverBgColor={themes.colors.primary}
            />
          </SC.LoginLink>
        )}
      </SC.Navigation>
    </SC.Container>
  );
};

export default Header;
