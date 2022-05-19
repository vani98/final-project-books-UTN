import React, { useState } from "react";
import Layout from "../../components/Layout";
import { USER_CART } from "../../hooks/useAddToCart";
import useApi from "../../hooks/useApi";
import * as SC from "./Cart.styles";
import Loader from "../../components/Loader";
import { priceFormat } from "../../utils";
import { IconTrash } from "../../assets/images";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { LOGGED_USER } from "../Login/utils";
import PopUp from "../../components/PopUp/PopUp";

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem(USER_CART))
  );
  const [books, isLoading] = useApi("/books.json");

  const [showPopUp, setShowPopUp] = useState(false);

  let bookCounter = 0;
  let priceCounter = 0;
  const userValues = localStorage.getItem(LOGGED_USER);

  const handleSubmit = () => {
    if (!!userValues) {
      setShowPopUp(true);
      setTimeout(() => {
        setShowPopUp(false);
        localStorage.removeItem(USER_CART);
        document.location.reload(true);
      }, 1000);
    } else {
      navigate("/login");
    }
  };

  let navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/books");
  };

  const handleDelete = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
    localStorage.setItem(USER_CART, JSON.stringify(newCart));
  };

  return (
    <Layout>
      <SC.Container>
        {(cartItems || []).length > 0 ? (
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
                      <th>Unit Price</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {(cartItems || []).map((item) => {
                      const bookData = books.find(
                        (book) => book.id === item.id
                      );
                      const { price, image, title, id } = bookData;
                      const itemPrice = price * item.amount;
                      bookCounter += item.amount;
                      priceCounter += itemPrice;
                      return (
                        <SC.Item key={id}>
                          <td>
                            <img src={image} />
                          </td>

                          <td>{title}</td>

                          <td>{item.amount}</td>

                          <td>{priceFormat(price)}</td>

                          <td>{priceFormat(itemPrice)}</td>

                          <td>
                            <SC.Delete
                              size="3rem"
                              color="black"
                              src={IconTrash}
                              onClick={() => handleDelete(id)}
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
                      <td />
                      <td>{priceFormat(priceCounter)}</td>
                    </SC.Total>
                  </tfoot>
                </SC.Table>
                <SC.ButtonContainer>
                  <Button onClick={handleSubmit}>BUY NOW</Button>
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
      {showPopUp && (
        <PopUp>
          <p>Successfully Purchased</p>
        </PopUp>
      )}
    </Layout>
  );
};

export default Cart;
