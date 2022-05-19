import { Link } from "react-router-dom";
import styled from "styled-components";
import themes from "../../../themes";

export const Container = styled.header`
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
  height: 8.5rem;
  border-bottom: 2px solid ${themes.colors.grey[0]};
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
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

export const Navigation = styled.div`
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
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

export const LoginLink = styled(Link)`
  margin: 2rem;
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
`;

export const Triangle = styled.div`
  position: absolute;
  top: 6.9rem;
  right: 3rem;
  border-right: 1rem solid transparent;
  border-bottom: 1rem solid ${themes.colors.grey[0]};
  border-left: 1rem solid transparent;
`;
