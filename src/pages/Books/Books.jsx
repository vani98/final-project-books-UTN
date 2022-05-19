import * as SC from "./Books.styles";
import Layout from "../../components/Layout/Layout";
import useApi from "../../hooks/useApi";
import Loader from "../../components/Loader";
import BookCard from "../../components/BookCard";

const Books = () => {
  const [bookData, isLoading] = useApi("books.json");
  const [genreData] = useApi("genres.json");

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SC.PageTitle>
            Conoce el catálogo de libros que tenemos <span>para ti</span>
          </SC.PageTitle>
          <SC.PageSubTitle>Elige el que más desees ❤</SC.PageSubTitle>

          <SC.BookContainer>
            {bookData.map((book) => (
              <BookCard data={book} genreData={genreData} key={book.id} />
            ))}
          </SC.BookContainer>
        </>
      )}
    </Layout>
  );
};

export default Books;
