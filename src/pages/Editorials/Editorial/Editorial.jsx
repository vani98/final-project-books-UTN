import * as SC from "./Editorial.styles";

const Editorial = ({ data }) => {
  const { image } = data;

  return (
    <>
      <SC.EditorialImg src={image} alt="editorial" />
    </>
  );
};

export default Editorial;
