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
          <SC.ContactGroup>
            <SVGIcon src={IconLocation} color="black" size="3rem" />
            <p> 4512 D Street</p>
          </SC.ContactGroup>
          <SC.ContactGroup>
            <SVGIcon src={IconPhone} color="black" size="3rem" />
            <p> 586-420-2817</p>
          </SC.ContactGroup>
          <SC.ContactGroup>
            <SVGIcon src={IconEmail} color="black" size="3rem" />
            <p>bookstore@bookstore.com</p>
          </SC.ContactGroup>
        </SC.Contact>
        <SC.SocialMedia>
          <SC.Title>Social Media</SC.Title>
          <div>
            <a href="https://www.facebook.com/">
              <SC.Icon src={IconFacebook} />
            </a>
            <a href="https://twitter.com/">
              <SC.Icon src={IconTwitter} />
            </a>
            <a href="https://www.instagram.com/">
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
      <SC.Navigation>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/editorials">Editorials</Link>
        <Link to="/about-us">About Us</Link>
      </SC.Navigation>
    </SC.FooterContainer>
  );
};

export default Footer;
