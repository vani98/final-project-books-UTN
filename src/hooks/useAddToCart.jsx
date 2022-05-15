export const USER_CART = "USER_CART";

const useAddToCart = (id) => {
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
  };

  return { handleAddToCart };
};

export default useAddToCart;
