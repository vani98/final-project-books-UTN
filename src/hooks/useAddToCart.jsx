export const USER_CART = "USER_CART";

const useAddToCart = (key, value) => {
  const previousCart = JSON.parse(localStorage.getItem(key));
  let newCart;
  if (!previousCart) {
    newCart = [{ id: value, amount: 1 }];
  } else {
    const existingItem = previousCart.findIndex((item) => item.id === value);
    newCart = [...previousCart];

    if (existingItem !== -1) {
      previousCart[existingItem].amount++;
    } else {
      newCart = [...previousCart, { id: value, amount: 1 }];
    }
  }
  localStorage.setItem(key, JSON.stringify(newCart));
};

export default useAddToCart;
