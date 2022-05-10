import React from "react";
import NavigationBar from "./NavigationBar";
import * as SC from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <SC.Container>{children}</SC.Container>
    </div>
  );
};

export default Layout;
