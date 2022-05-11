import * as SC from "./Footer.styles";
import SVGIcon from "../../SVGIcon";
import {
  IconPhone,
  IconLocation,
  IconEmail,
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconVisa,
  IconAmericanexpress,
  IconMastercard,
  IconPaypal,
} from "../../../assets/images";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <SC.FooterContainer>
      <SC.FooterTop>
        <SC.Contact>
          <SC.Title>Contact</SC.Title>
          <div>
            <SVGIcon src={IconLocation} color="black" size="3rem" />
            <p> 4512 D Street</p>
          </div>
          <div>
            <SVGIcon src={IconPhone} color="black" size="3rem" />
            <p> 586-420-2817</p>
          </div>
          <div>
            <SVGIcon src={IconEmail} color="black" size="3rem" />
            <p>bookstore@bookstore.com</p>
          </div>
        </SC.Contact>
        <SC.SocialMedia>
          <SC.Title>Social Media</SC.Title>
          <div>
            <a href="https://www.facebook.com/" target="_blank">
              <SC.Icon src={IconFacebook} />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <SC.Icon src={IconTwitter} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <SC.Icon src={IconInstagram} />
            </a>
          </div>
        </SC.SocialMedia>
        <SC.Payment>
          <SC.Title>Payment</SC.Title>
          <div>
            <SC.Icon src={IconAmericanexpress} />
            <SC.Icon src={IconVisa} />
            <SC.Icon src={IconMastercard} />
            <SC.Icon src={IconPaypal} />
          </div>
        </SC.Payment>
      </SC.FooterTop>
      <SC.FooterBottom>
        <SC.Copy
          href="https://www.linkedin.com/in/carmen-vanina-ari%C3%B1o/"
          target="_blank"
        >
          © 2022 Vanina Ariño
        </SC.Copy>
        <SC.Navigation>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/editorials">Editorials</Link>
          <Link to="/about-us">About Us</Link>
        </SC.Navigation>
      </SC.FooterBottom>
    </SC.FooterContainer>
  );
};

export default Footer;
