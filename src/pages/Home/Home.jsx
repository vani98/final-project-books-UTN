import { useState } from "react";
import { ImgLookingBook, IconPublisher, IconBook } from "../../assets/images";
import { SVGIcon } from "../../components/SVGIcon/SVGIcon.styles";
import * as SC from "./Home.styles";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import BookCard from "../../components/BookCard";
import useApi from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [bookData, isLoading] = useApi("books.json");
  const [randomBook, setRandomBook] = useState();

  const handleRandomClick = () => {
    const random = Math.floor(Math.random() * bookData.length);
    setRandomBook(random);
  };

  let navigate = useNavigate();
  const handleRedirectBooks = () => {
    navigate(`/books`);
  };

  const handleRedirectPublisher = () => {
    navigate(`/editorials`);
  };

  return (
    <Layout>
      <SC.Container>
        <SC.Welcome>
          <h2>
            Welcome to <span>BookStore</span>, a place where you will find your
            Favorite books
          </h2>
          <img src={ImgLookingBook}></img>
        </SC.Welcome>
        <SC.BooksAndPublishers>
          <h3>
            Explore our <span>page</span> and discover all the great books that
            are waiting for you!
          </h3>
          <div>
            <SC.Card onClick={handleRedirectBooks}>
              <SVGIcon image={IconBook} size="20rem" color="black" />
              <p>Find and buy your book</p>
            </SC.Card>
            <SC.Card>
              <SVGIcon
                image={IconPublisher}
                size="20rem"
                color="black"
                onClick={handleRedirectPublisher}
              />
              <p>Visit the best editorials</p>
            </SC.Card>
          </div>
        </SC.BooksAndPublishers>
        <h3>
          Want a surprise? Generate a <span>random</span> Book
        </h3>
        <SC.Random>
          <Button onClick={handleRandomClick}>Generate Now</Button>
          {randomBook >= 0 ? (
            <BookCard data={bookData[randomBook]}></BookCard>
          ) : (
            <SC.QuestionCard>
              <span>?</span>
            </SC.QuestionCard>
          )}
        </SC.Random>
      </SC.Container>
    </Layout>
  );
};

export default Home;
