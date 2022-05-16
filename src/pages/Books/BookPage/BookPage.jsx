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
                      {bookFound.genres?.map((item) => {
                        const genresData = genres.find(
                          (genre) => genre.id == item
                        );
                        return (
                          genresData && (
                            <p key={genresData.id}>{genresData.name}</p>
                          )
                        );
                      })}
                    </SC.Tag>
                    <p>{bookFound.description}</p>
                    <SC.Details>
                      <div>
                        <p>Author:</p>
                        <p>{bookFound.author}</p>
                      </div>
                      <div>
                        <p>Published:</p>
                        <p>{bookFound.published}</p>
                      </div>
                      <div>
                        <p>Publishers:</p>
                        {bookFound.publishers?.map((item) => {
                          const publishersData = publishers.find(
                            (publisher) => publisher.id == item
                          );
                          return (
                            publishersData && (
                              <p key={publishersData.id}>
                                {publishersData.name}
                              </p>
                            )
                          );
                        })}
                      </div>
                    </SC.Details>
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
