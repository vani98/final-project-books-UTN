import SVGIcon from "../SVGIcon";
import * as SC from "./PopUp.styles";
import { IconSmile } from "../../assets/images";
const PopUp = ({ children }) => {
  return (
    <SC.Container>
      {children}
      <SVGIcon size="4rem" src={IconSmile} color="black" />
    </SC.Container>
  );
};

export default PopUp;
