import Layout from "../../components/Layout";
import * as SC from "./Home.styles";
import { ImgLookingBook } from "../../assets/images";
const Home = () => {
  return (
    <Layout>
      <SC.Welcome>
        <SC.WelcomeText>
          Welcome to <span>BookStore</span>, a place where you will find your
          Favorite books
        </SC.WelcomeText>
        <SC.ImageBook src={ImgLookingBook}></SC.ImageBook>
      </SC.Welcome>
      {/* <p>Here you'll find</p> */}
    </Layout>
  );
};

export default Home;
