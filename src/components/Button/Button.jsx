import * as SC from "./Button.styles";

const Button = ({ children, onClick, type }) => {
  return (
    <SC.Button onClick={onClick} type={type}>
      {children}
    </SC.Button>
  );
};

export default Button;
