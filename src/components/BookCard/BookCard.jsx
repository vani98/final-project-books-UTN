import * as SC from "./BookCard.styles";
import Tag from "../Tag";

const BookCard = ({ book, genreData }) => {
  const { title, author, price, genres, published, publishers, image } = book;
  return (
    <>
      <SC.Card>
        <SC.CardHeader>
          <img src={image} alt="portada" />
        </SC.CardHeader>

        <SC.CardBody>
          <SC.Title>{title}</SC.Title>
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

          {/* <p>Author: {author}</p>
          <p>Published: {published}</p>
          <p>Publishers: {publishers}</p>
          <p>uSd {price}</p> */}
        </SC.CardBody>
      </SC.Card>
    </>
  );
};

export default BookCard;
