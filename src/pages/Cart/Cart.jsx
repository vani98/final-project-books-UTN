import Layout from "../../components/Layout";
import { USER_CART } from "../../hooks/useAddToCart";
import useApi from "../../hooks/useApi";
import * as SC from "./Cart.styles";
import Loader from "../../components/Loader";
import { priceFormat } from "../../utils";
import { IconTrash } from "../../assets/images";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem(USER_CART));
  const [books, isLoading] = useApi("/books.json");
  let bookCounter = 0;
  let priceCounter = 0;

  let navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/books");
  };

  return (
    <Layout>
      <SC.Container>
        {cartItems ? (
          <>
            <SC.Title>Products in Cart</SC.Title>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <SC.Table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {(cartItems || []).map((item) => {
                      const finalBook = books.find(
                        (book) => book.id === item.id
                      );
                      const itemPrice = finalBook.price * item.amount;
                      bookCounter += item.amount;
                      priceCounter += itemPrice;
                      return (
                        <SC.Item key={finalBook.id}>
                          <td>
                            <img src={finalBook.image} />
                          </td>
                          <td>{finalBook.title}</td>
                          <td>{item.amount}</td>
                          <td>{priceFormat(itemPrice)}</td>
                          <td>
                            <SC.Delete
                              size="3rem"
                              color="black"
                              src={IconTrash}
                            />
                          </td>
                        </SC.Item>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <SC.Total>
                      <td colSpan={2}>TOTAL</td>
                      <td>{bookCounter}</td>
                      <td>{priceFormat(priceCounter)}</td>
                    </SC.Total>
                  </tfoot>
                </SC.Table>
                <SC.ButtonContainer>
                  <Button>BUY NOW</Button>
                </SC.ButtonContainer>
              </>
            )}
          </>
        ) : (
          <SC.NothingOnCart>
            <p>SHOPPING CART EMPTY</p>
            <Button onClick={handleRedirect}>Add one</Button>
          </SC.NothingOnCart>
        )}
      </SC.Container>
    </Layout>
  );
};

export default Cart;
