import { IconShoppingCart } from "../../assets/images";
import SVGIcon from "../SVGIcon";
import * as SC from "./ShoppingCart.styles";

export const ShoppingCart = () => {
  return (
    <SC.Container>
      <SVGIcon src={IconShoppingCart} color="black" size="2.9rem" />
      <SC.BubbleCount>0</SC.BubbleCount>
    </SC.Container>
  );
};

export default ShoppingCart;
