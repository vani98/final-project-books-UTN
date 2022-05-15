import Layout from "../../../components/Layout";
import * as SC from "./Bookpage.styles";
import { useParams } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import Loader from "../../../components/Loader";
import { priceFormat } from "../../../utils";
import { Button } from "../../../components/Button/Button.styles";
import useAddToCart from "../../../hooks/useAddToCart";
const BookPage = () => {
  const { bookId } = useParams();
  const { handleAddToCart } = useAddToCart();
  const [book, isLoading] = useApi("/books.json");
  const [genres] = useApi("/genres.json");
  const [publishers] = useApi("/publishers.json");
  const bookFound = book.find((item) => item.id == bookId);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {bookFound ? (
            <>
              <SC.Container>
                <SC.Image src={bookFound.image}></SC.Image>
                <div>
                  <SC.Title>{bookFound.title}</SC.Title>
                  <div>
                    <SC.Tag>
                      {bookFound !== undefined &&
                        bookFound.genres.map((item) => {
                          const bookData = genres?.find(
                            (genre) => genre.id === item
                          );
                          return <p key={bookData.id}>{bookData.name}</p>;
                        })}
                    </SC.Tag>
                    <p>{bookFound.description}</p>
                    <p>
                      <span>Author: </span>
                      {bookFound.author}
                    </p>
                    <p>
                      <span>Published: </span>
                      {bookFound.published}
                    </p>
                    {bookFound.publishers.map((item) => {
                      const bookData = publishers?.find(
                        (publisher) => publisher.id === item
                      );
                      return (
                        <p key={bookData.id}>
                          <span>Publishers: </span>
                          {bookData.name}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </SC.Container>

              <SC.Action>
                <Button onClick={() => handleAddToCart(Number(bookId))}>
                  Add to Cart
                </Button>
                <p>{priceFormat(bookFound.price)}</p>
              </SC.Action>
            </>
          ) : (
            <p>Not found</p>
          )}
        </>
      )}
    </Layout>
  );
};

export default BookPage;
