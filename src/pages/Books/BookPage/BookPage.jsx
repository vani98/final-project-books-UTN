import React from "react";
import { useParams } from "react-router-dom";

const BookPage = () => {
  const { bookId } = useParams();
  // get books
  // filter -> bookData (el libro con el id)
  // renderizar la data

  return <div>BookPage - {bookId}</div>;
};

export default BookPage;
