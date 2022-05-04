import Layout from "../../components/Layout/Layout";
import BookCard from "../../components/BookCard";
import useApi from "../../hooks/useApi";

const BOOKS_URL = `${import.meta.env.VITE_API_URL}books.json`;

const Books = () => {
  const [books] = useApi(BOOKS_URL);
  return (
    <Layout>
      {books.map((book) => (
        <BookCard data={book} key={book.id}></BookCard>
      ))}
    </Layout>
  );
};

export default Books;
