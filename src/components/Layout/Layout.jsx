import Header from "./Header";
import * as SC from "./Layout.styles";
import Footer from "./Footer";
import { IconToTop } from "../../assets/images";
import SVGIcon from "../SVGIcon";
import { useEffect, useState } from "react";

const MIN_SCROLL = 86;

const Layout = ({ children }) => {
  const [showScrollArrow, setShowScrollArrow] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      setShowScrollArrow(e.target.documentElement.scrollTop > MIN_SCROLL);
    };
    window.addEventListener("scroll", onScroll);
  }, [showScrollArrow]);

  return (
    <div>
      {/* <Header /> */}
      <SC.Container>{children}</SC.Container>
      {showScrollArrow && (
        <SC.ToTop onClick={() => window.scrollTo(0, 0)}>
          <SVGIcon src={IconToTop} size="5rem" color="white" />
        </SC.ToTop>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
