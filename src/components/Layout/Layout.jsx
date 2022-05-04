import React from "react";
import Header from "../Header";
import * as SC from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <SC.Container>{children}</SC.Container>
    </div>
  );
};

export default Layout;
