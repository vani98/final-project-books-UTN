import * as SC from "./Editorial.styles";

const Editorial = ({ data }) => {
  const { name, image } = data;
  return (
    <SC.Container>
      <SC.EditorialImg src={image} alt="editorial" />
      <p>{name}</p>
    </SC.Container>
  );
};

export default Editorial;
