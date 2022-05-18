import * as SC from "./Editorial.styles";

const Editorial = ({ data }) => {
  const { image, link } = data;
  return (
    <>
      <SC.Container href={link} target="_blank">
        <img src={image} alt="editorial" />
      </SC.Container>
    </>
  );
};

export default Editorial;
