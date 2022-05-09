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
        <SC.Container>
          {bookData.map((book) => (
            <BookCard book={book} genreData={genreData} key={book.id} />
          ))}
        </SC.Container>
      )}
    </Layout>
  );
};

export default Books;
