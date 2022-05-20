import { Link } from "react-router-dom";
import styled from "styled-components";
import themes from "../../../themes";
import SVGIcon from "../../SVGIcon";

export const LogoCompany = styled(SVGIcon)`
  :hover {
    background-color: ${themes.colors.orange[1]};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  transition: ease 0.5;
  a {
    color: black;
    font-size: 2rem;
    text-decoration: none;
    margin-right: 3rem;
    transition: color 0.2s;
    :hover {
      color: ${themes.colors.primary};
      transition: color 0.2s;
    }
  }
  @media (${themes.devices.tablet}) {
    position: absolute;
    top: 8.5rem;
    right: 0;
    height: ${(props) => (props.showMenu ? "auto" : "0")};
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    border-bottom: 2px solid ${themes.colors.grey[0]};
    background-color: white;
    transition: ease 0.5;
    li {
      width: 100%;
    }
    a {
      display: block;
      padding: 1rem 0;
      text-align: center;
      width: 100%;
      font-size: 2rem;
      :hover {
        background-color: ${themes.colors.primary};
        color: white;
      }
      :active {
        background-color: ${themes.colors.orange[1]};
      }
    }
  }
`;

export const ToCart = styled(Link)`
  margin-left: 1.5rem;
`;

export const UserIcon = styled.p`
  user-select: none;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  background-color: ${themes.colors.primary};
  color: white;
  border-radius: 50%;
  text-transform: capitalize;
  :hover {
    background-color: ${themes.colors.orange[1]};
  }
`;

export const LoginIcon = styled(Link)`
  margin: 0 2rem;
`;

export const UserSettigs = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 7.9rem;
  right: 1.4rem;
  padding: 1.5rem 2rem;
  max-width: 22rem;
  text-align: left;
  border-radius: 0.5rem;
  background-color: ${themes.colors.grey[0]};
  p {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  span {
    margin-left: 0.5rem;
    font-weight: ${themes.fontWeight[0]};
    color: ${themes.colors.primary};
    text-transform: uppercase;
  }
  a {
    font-size: 1.4rem;
    text-decoration: none;
    color: black;
    transition: all 0.3s ease;
    :hover {
      transition: all 0.3s ease;
      color: ${themes.colors.orange[1]};
    }
  }
`;

export const Triangle = styled.div`
  position: absolute;
  top: 6.9rem;
  right: 3rem;
  border-right: 1rem solid transparent;
  border-bottom: 1rem solid ${themes.colors.grey[0]};
  border-left: 1rem solid transparent;
`;

export const Menu = styled(SVGIcon)`
  display: none;
`;

export const Wrapper = styled.header`
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
  height: 8.5rem;
  border-bottom: 2px solid ${themes.colors.grey[0]};

  @media (${themes.devices.laptop}) {
    ${Navigation} {
      a {
        font-size: 1.5rem;
      }
    }
  }

  @media (${themes.devices.tablet}) {
    ${LogoCompany} {
      height: 5rem;
      width: 5rem;
    }
    ${ToCart} {
      div {
        height: 2.5rem;
        width: 2.5rem;
      }
    }
    ${UserIcon} {
      width: 3.2rem;
      height: 3.2rem;
      margin-right: 2rem;
    }
    ${LoginIcon} {
      div {
        height: 2.8rem;
        width: 2.8rem;
      }
    }
    ${UserSettigs} {
      right: 6rem;
    }
    ${Menu} {
      display: inline-block;
    }
    ${Triangle} {
      right: 7rem;
    }
  }

  @media (${themes.devices.mobileL}) {
    ${LogoCompany} {
      height: 4rem;
      width: 4rem;
    }
    ${ToCart} {
      div {
        height: 2.2rem;
        width: 2.2rem;
      }
    }
    ${UserIcon} {
      width: 3rem;
      height: 3rem;
      margin-right: 2rem;
    }
    ${LoginIcon} {
      div {
        height: 3rem;
        width: 3rem;
      }
    }
    ${Menu} {
      height: 3rem;
      width: 3rem;
    }
  }
  @media (${themes.devices.mobileM}) {
    padding: 0 1rem;
  }
`;
