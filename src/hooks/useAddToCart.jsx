import { useState } from "react";

export const USER_CART = "USER_CART";
const useAddToCart = (id) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleAddToCart = (id) => {
    const previousCart = JSON.parse(localStorage.getItem(USER_CART));
    let newCart;

    if (!previousCart) {
      newCart = [{ id: id, amount: 1 }];
    } else {
      const existingItem = previousCart.findIndex((item) => item.id === id);
      newCart = [...previousCart];
      if (existingItem !== -1) {
        previousCart[existingItem].amount++;
      } else {
        newCart = [...previousCart, { id: id, amount: 1 }];
      }
    }
    localStorage.setItem(USER_CART, JSON.stringify(newCart));
    setShowPopUp(true);
    setTimeout(() => {
      setShowPopUp(false);
    }, 480);
  };

  return { handleAddToCart, showPopUp };
};

export default useAddToCart;
