import { Link } from "react-router-dom";
import styled from "styled-components";
import themes from "../../../themes";

export const Container = styled.header`
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
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
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
  }
`;
