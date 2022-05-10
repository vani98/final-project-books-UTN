import { IconShoppingCart } from "../../../../assets/images";
import SVGIcon from "../../../SVGIcon";
import * as SC from "./ShoppingCart.styles";

export const ShoppingCart = () => {
  const cart = JSON.parse(localStorage.getItem("USER_CART"));
  return (
    <SC.Container>
      <SVGIcon src={IconShoppingCart} color="black" size="2.9rem" />
      <SC.BubbleCount>{cart ? cart.length : 0}</SC.BubbleCount>
    </SC.Container>
  );
};

export default ShoppingCart;
