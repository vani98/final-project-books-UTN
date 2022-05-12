import React from "react";
import * as SC from "./BookCard.styles";
import { priceFormat } from "../../../utils";
import SVGIcon from "../../../components/SVGIcon";
import { IconAddToCart, IconInfo } from "../../../assets/images";
import useAddToCart, { USER_CART } from "../../../hooks/useAddToCart";

const MAX_CHARACTERS = 80;

const BookCard = ({ data }) => {
  const { image, title, price, id, description } = data;

  const handleAddToCart = () => {
    useAddToCart(USER_CART, id);
  };

  const shortDescription = !(description.lenght >= MAX_CHARACTERS)
    ? `${description.slice(0, MAX_CHARACTERS)}...`
    : description;

  return (
    <SC.Container>
      <SC.Image src={image} />
      <SC.Data>
        <SC.Title>{title}</SC.Title>

        <SC.Description>{shortDescription}</SC.Description>

        <SC.ActionButtons>
          <SC.Price>{priceFormat(price)}</SC.Price>
          <div>
            <SC.ButtonWrapper onClick={() => handleAddToCart(id)}>
              <SVGIcon src={IconAddToCart} color="white" size="1.5rem" />
            </SC.ButtonWrapper>
            <SC.ButtonWrapper onClick={() => console.log(id)}>
              <SVGIcon src={IconInfo} color="white" size="1.5rem" />
            </SC.ButtonWrapper>
          </div>
        </SC.ActionButtons>
      </SC.Data>
    </SC.Container>
  );
};

export default BookCard;
