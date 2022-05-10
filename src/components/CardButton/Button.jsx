import React from "react";
import * as SC from "./Button.styles";

const Button = ({ children }) => {
  return <SC.Button>{children}</SC.Button>;
};

export default Button;
