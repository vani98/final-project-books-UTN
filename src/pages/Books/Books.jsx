import * as SC from "./Books.styles";
import Layout from "../../components/Layout/Layout";
import BookCard from "../../components/BookCard";
import useApi from "../../hooks/useApi";
import Loader from "../../components/Loader";

const Books = () => {
  const { data, isLoading } = useApi("books.json");

  return (
    <Layout>
      {isLoading ? (
        <SC.LoaderWrapper>
          <Loader />
        </SC.LoaderWrapper>
      ) : (
        <SC.Container>
          {data.map((book) => (
            <BookCard data={book} key={book.id} />
          ))}
        </SC.Container>
      )}
    </Layout>
  );
};

export default Books;
