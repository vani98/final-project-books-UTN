import Header from "./Header";
import * as SC from "./Layout.styles";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <SC.Container>{children}</SC.Container>
      <Footer />
    </div>
  );
};

export default Layout;
