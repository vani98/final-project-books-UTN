import { Link } from "react-router-dom";
import styled from "styled-components";
import themes from "../../../themes";
import SVGIcon from "../../SVGIcon";

export const Wrapper = styled.header`
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
  height: 8.5rem;
  border-bottom: 2px solid ${themes.colors.grey[0]};
  @media (${themes.devices.mobileM}) {
    padding: 0 1rem;
  }
`;

export const LogoCompany = styled(SVGIcon)`
  @media (${themes.devices.tablet}) {
    height: 5rem;
    width: 5rem;
  }
  @media (${themes.devices.mobileL}) {
    height: 4rem;
    width: 4rem;
  }
`;

export const NavLink = styled(Link)`
  color: black;
  font-size: 2rem;
  text-decoration: none;
  margin-right: 3rem;
  transition: color 0.2s;

  :hover {
    color: ${themes.colors.primary};
    transition: color 0.2s;
  }
  @media (${themes.devices.laptop}) {
    font-size: 1.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  @media (${themes.devices.tablet}) {
    padding: 2rem 0;
    display: ${(props) => props.display};
    position: absolute;
    top: 9rem;
    right: 0;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #fff;
    border-bottom: 2px solid ${themes.colors.grey[0]};
    a {
      font-size: 2rem;
    }
    li:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;

export const ToCart = styled(Link)`
  margin-left: 1.5rem;
  @media (${themes.devices.tablet}) {
    div {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
  @media (${themes.devices.mobileL}) {
    div {
      height: 2.2rem;
      width: 2.2rem;
    }
  }
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
  @media (${themes.devices.tablet}) {
    width: 3.2rem;
    height: 3.2rem;
    margin-right: 2rem;
  }
  @media (${themes.devices.mobileL}) {
    width: 3rem;
    height: 3rem;
    margin-right: 2rem;
  }
`;

export const LoginIcon = styled(Link)`
  margin: 0 2rem;
  @media (${themes.devices.tablet}) {
    div {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
  @media (${themes.devices.mobileL}) {
    div {
      height: 2.2rem;
      width: 2.2rem;
    }
  }
`;

export const UserSettigs = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 7.9rem;
  right: 1.4rem;
  padding: 2rem 3rem;
  text-align: center;
  border-radius: 0.5rem;
  background-color: ${themes.colors.grey[0]};
  span {
    color: ${themes.colors.primary};
    text-transform: uppercase;
  }
  a {
    margin-top: 1rem;
    font-size: 1.4rem;
    padding: 0.3rem;
    text-decoration: none;
    color: black;
    transition: all 0.3s ease;

    :hover {
      transition: all 0.3s ease;
      transform: scale(1.1);
      color: ${themes.colors.orange[1]};
    }
  }
  @media (${themes.devices.tablet}) {
    right: 6rem;
  }
`;

export const Triangle = styled.div`
  position: absolute;
  top: 6.9rem;
  right: 3rem;
  border-right: 1rem solid transparent;
  border-bottom: 1rem solid ${themes.colors.grey[0]};
  border-left: 1rem solid transparent;
  @media (${themes.devices.tablet}) {
    right: 7rem;
  }
`;

export const Menu = styled(SVGIcon)`
  display: none;
  @media (${themes.devices.tablet}) {
    display: inline-block;
  }
  @media (${themes.devices.mobileL}) {
    height: 3rem;
    width: 3rem;
  }
`;
