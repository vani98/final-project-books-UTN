import * as SC from "./BookCard.styles";
import Tag from "../Tag";
import CardButton from "../CardButton/Button";

const BookCard = ({ book, genreData }) => {
  const { title, author, price, genres, published, publishers, image } = book;
  return (
    <>
      <SC.Card>
        <SC.CardHeader>
          <img src={image} alt="portada" />
        </SC.CardHeader>
        <SC.CardBody>
          <SC.Price>{price}U$S</SC.Price>
          <SC.Title>{title}</SC.Title>
          <SC.Author>{author}</SC.Author>
          <SC.TagContainer>
            {genres.map((genreId) => {
              const genreFound = genreData.find(
                (genre) => genre.id === genreId
              );
              return genreFound ? (
                <Tag key={genreId}>{genreFound.name}</Tag>
              ) : null;
            })}
          </SC.TagContainer>
          <CardButton>ADD TO CART</CardButton>
        </SC.CardBody>
      </SC.Card>
    </>
  );
};

export default BookCard;
