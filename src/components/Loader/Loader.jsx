import * as SC from "./Loader.styles";
import { IconLoader } from "../../assets/images";

const Loader = () => {
  return (
    <SC.Wrapper>
      <SC.Loader src={IconLoader} color="gray" size="5rem" />
    </SC.Wrapper>
  );
};

export default Loader;
