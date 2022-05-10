import React from "react";
import * as SC from "./BookCard.styles";
import { priceFormat } from "../../../utils";
import SVGIcon from "../../../components/SVGIcon";
import { IconAddToCart, IconInfo } from "../../../assets/images";

export const USER_CART = "USER_CART";

const BookCard = ({ data }) => {
  const { image, title, price, id } = data;

  const handleAddToCart = (id) => {
    const previousCart = JSON.parse(localStorage.getItem(USER_CART));

    let newCart;

    if (!previousCart) {
      newCart = [id];
    } else {
      newCart = [...previousCart, id];
    }

    localStorage.setItem(USER_CART, JSON.stringify(newCart));
  };

  return (
    <SC.Container>
      <SC.Image src={image} />
      <SC.Data>
        <SC.Title>{title}</SC.Title>
        <div>description</div>
        <div>
          <SC.Price>{priceFormat(price)}</SC.Price>
          <div>
            <SC.ButtonWrapper onClick={() => handleAddToCart(id)}>
              <SVGIcon src={IconAddToCart} color="black" size="2rem" />
            </SC.ButtonWrapper>
            <SC.ButtonWrapper>
              <SVGIcon src={IconInfo} color="black" size="2rem" />
            </SC.ButtonWrapper>
          </div>
        </div>
      </SC.Data>
    </SC.Container>
  );
};

export default BookCard;
