import * as SC from "./BookCard.styles";
import Tag from "../Tag/Tag";

const BookCard = ({ data }) => {
  const { title, author, price, genres, published, publishers, image } = data;

  return (
    <>
      <SC.Card>
        <SC.CardHeader>
          <img src={image} alt="portada" />
        </SC.CardHeader>
        <SC.CardBody>
          {/* {genres.map((genre) => (
            <Tag key={genre}></Tag>
          ))} */}

          <span>{}</span>
          <SC.Title>{title}</SC.Title>
          <p>Author: {author}</p>
          <p>Published: {published}</p>
          <p>Publishers: {publishers}</p>
          <p>uSd {price}</p>
        </SC.CardBody>
      </SC.Card>
    </>
  );
};

export default BookCard;
