import { IconShoppingCart } from "../../../../assets/images";
import SVGIcon from "../../../SVGIcon";
import * as SC from "./ShoppingCart.styles";

export const ShoppingCart = () => {
  const cart = JSON.parse(localStorage.getItem("USER_CART"));

  // useEffect(() => {
  //   console.log("hola");
  // }, [localStorage]);

  const amount = cart?.reduce((counter, item) => {
    counter += item.amount;
    return counter;
  }, 0);

  const bubbleNumber = () => {
    if (!amount) {
      return "0";
    }
    if (amount > 9) {
      return "9+";
    }
    return amount;
  };

  return (
    <SC.Container>
      <SVGIcon src={IconShoppingCart} color="black" size="2.9rem" />
      <SC.BubbleCount>{bubbleNumber()}</SC.BubbleCount>
    </SC.Container>
  );
};

export default ShoppingCart;
