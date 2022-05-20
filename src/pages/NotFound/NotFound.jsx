import * as SC from "./NotFound.styles";
import Layout from "../../components/Layout/Layout";
import { IconSad } from "../../assets/images";
import SVGIcon from "../../components/SVGIcon";
import themes from "../../themes";

const NotFound = () => {
  return (
    <Layout>
      <SC.Container>
        <p>404</p>
        <p>Not Found</p>
        <SVGIcon
          src={IconSad}
          size="8rem"
          color={themes.colors.grey[2]}
        ></SVGIcon>
        <p>The resource requested could not be found on this server</p>
      </SC.Container>
    </Layout>
  );
};

export default NotFound;
