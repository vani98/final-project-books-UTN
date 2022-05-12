import * as SC from "./Button.styles";

const Button = ({ children, onClick }) => {
  return <SC.Button onClick={onClick}>{children}</SC.Button>;
};

export default Button;
