import React from "react";
import NavigationBar from "./NavigationBar";
import * as SC from "./Layout.styles";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <SC.Container>{children}</SC.Container>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
