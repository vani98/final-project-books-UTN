import * as SC from "./BookCard.styles";
import { priceFormat } from "../../utils";
import SVGIcon from "../SVGIcon";
import { IconAddToCart, IconInfo } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import useAddToCart from "../../hooks/useAddToCart";
import PopUp from "../PopUp/PopUp";

const MAX_CHARACTERS = 80;
const BookCard = ({ data }) => {
  const { image, title, price, id, description } = data;
  const { handleAddToCart, showPopUp } = useAddToCart(id);
  const shortDescription = !(description.lenght >= MAX_CHARACTERS)
    ? `${description.slice(0, MAX_CHARACTERS)}...`
    : description;

  let navigate = useNavigate();
  const handleRedirect = (id) => {
    navigate(`/books/${id}`);
  };

  return (
    <SC.Container>
      <SC.Image src={image} />
      <SC.Data>
        <SC.Title>{title}</SC.Title>
        <div>{shortDescription}</div>
        <SC.ActionButtons>
          <SC.Price>{priceFormat(price)}</SC.Price>
          <div>
            <SC.ButtonWrapper onClick={() => handleAddToCart(id)}>
              <SVGIcon src={IconAddToCart} color="white" size="1.5rem" />
            </SC.ButtonWrapper>
            <SC.ButtonWrapper onClick={() => handleRedirect(id)}>
              <SVGIcon src={IconInfo} color="white" size="1.5rem" />
            </SC.ButtonWrapper>
          </div>
        </SC.ActionButtons>
      </SC.Data>
      {showPopUp && (
        <PopUp>
          <p>Added to cart</p>
        </PopUp>
      )}
    </SC.Container>
  );
};

export default BookCard;
