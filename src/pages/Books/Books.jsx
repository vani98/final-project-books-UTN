import * as SC from "./Books.styles";
import Layout from "../../components/Layout/Layout";
import BookCard from "../../components/BookCard";
import useApi from "../../hooks/useApi";
import Loader from "../../components/Loader";

const Books = () => {
  const [bookData, isLoading] = useApi("books.json");
  const [genreData] = useApi("genres.json");

  return (
    <Layout>
      {isLoading ? (
        <SC.LoaderWrapper>
          <Loader />
        </SC.LoaderWrapper>
      ) : (
        <>
          <SC.PageTitle>Conoce el catálogo de libros que tenemos</SC.PageTitle>
          <SC.PageSubTitle>Elige el que más desees ❤</SC.PageSubTitle>

          <SC.BookContainer>
            {bookData.map((book) => (
              <BookCard book={book} genreData={genreData} key={book.id} />
            ))}
          </SC.BookContainer>
        </>
      )}
    </Layout>
  );
};

export default Books;
