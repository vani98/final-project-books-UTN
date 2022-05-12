const useAddToCart = (key, value) => {
  const handleAddToCart = (value) => {
    const previousCart = JSON.parse(localStorage.getItem(key));

    let newCart;

    if (!previousCart) {
      newCart = [value];
    } else {
      newCart = [...previousCart, value];
    }

    localStorage.setItem(key, JSON.stringify(newCart));
  };
  return { handleAddToCart };
};

export default useAddToCart;
