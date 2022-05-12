import React from "react";
import * as SC from "./BookCard.styles";
import { priceFormat } from "../../../utils";
import SVGIcon from "../../../components/SVGIcon";
import { IconAddToCart, IconInfo } from "../../../assets/images";
import useAddToCart from "../../../hooks/useAddToCart";

const BookCard = ({ data }) => {
  const { image, title, price, id, description } = data;
  const { handleAddToCart } = useAddToCart("USER_CART", id);

  const shortDescription = `${description.slice(0, 80)}...`;

  return (
    <SC.Container>
      <SC.Image src={image} />
      <SC.Data>
        <SC.CardTop>
          <SC.Title>{title}</SC.Title>
          <SC.Description>{shortDescription}</SC.Description>
        </SC.CardTop>
        <SC.CardBottom>
          <SC.Price>{priceFormat(price)}</SC.Price>
          <div>
            <SC.ButtonWrapper onClick={() => handleAddToCart(id)}>
              <SVGIcon src={IconAddToCart} color="white" size="2.2rem" />
            </SC.ButtonWrapper>
            <SC.ButtonWrapper onClick={() => console.log(id)}>
              <SVGIcon src={IconInfo} color="white" size="2.2rem" />
            </SC.ButtonWrapper>
          </div>
        </SC.CardBottom>
      </SC.Data>
    </SC.Container>
  );
};

export default BookCard;
