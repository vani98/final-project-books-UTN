import Layout from "../../components/Layout";
import { USER_CART } from "../../hooks/useAddToCart";
import useApi from "../../hooks/useApi";
import * as SC from "./Cart.styles";

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem(USER_CART));
  const [books, isLoading] = useApi("/books.json");

  return (
    <Layout>
      <SC.Title>Shopping Cart</SC.Title>
      {isLoading ? (
        <>loading...</>
      ) : (
        <>
          {(cartItems || []).map((item) => {
            const finalBook = books.find((book) => book.id === item.id);
            console.log(finalBook);
            return (
              <div>
                {finalBook.title} - {item.amount}
              </div>
            );
          })}
        </>
      )}
    </Layout>
  );
};

export default Cart;
