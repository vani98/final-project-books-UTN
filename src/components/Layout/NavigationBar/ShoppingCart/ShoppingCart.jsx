import { IconShoppingCart } from "../../../../assets/images";
import SVGIcon from "../../../SVGIcon";
import * as SC from "./ShoppingCart.styles";

export const ShoppingCart = () => {
  const cart = JSON.parse(localStorage.getItem("USER_CART"));

  const amount = cart.reduce((counter, item) => {
    counter += item.amount;
    return counter;
  }, 0);

  return (
    <SC.Container>
      <SVGIcon src={IconShoppingCart} color="black" size="2.9rem" />
      <SC.BubbleCount>{amount > 9 ? "9+" : amount}</SC.BubbleCount>
    </SC.Container>
  );
};

export default ShoppingCart;
