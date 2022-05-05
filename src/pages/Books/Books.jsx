import * as SC from "./Books.styles";
import Layout from "../../components/Layout/Layout";
import BookCard from "../../components/BookCard";
import useApi from "../../hooks/useApi";

const Books = () => {
  const { data, isLoading } = useApi("books.json");
  return (
    <Layout>
      <SC.Container>
        {data.map((book) => (
          <BookCard data={book} key={book.id}></BookCard>
        ))}
      </SC.Container>
    </Layout>
  );
};

export default Books;
