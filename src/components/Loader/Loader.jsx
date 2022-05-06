import * as SC from "./Loader.styles";
import { IconLoader } from "../../assets/images";

const Loader = () => {
  return <SC.Loader src={IconLoader} color="gray" size="5rem" />;
};

export default Loader;
