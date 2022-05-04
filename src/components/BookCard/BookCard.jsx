const BookCard = ({ data }) => {
  const { title } = data;
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default BookCard;
