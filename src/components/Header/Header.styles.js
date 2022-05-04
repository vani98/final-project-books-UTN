import styled from "styled-components";
import themes from "../../themes";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  border-bottom: 2px solid #eee;
`;

export const Logo = styled.img`
  width: 10rem;
  height: 6rem;
  color: red;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const ListItem = styled.li`
  a {
    margin-right: 2rem;
    font-size: 2rem;
    color: black;
    text-decoration: none;
    transition: color 0.5s;
  }
  a:hover {
    color: #f2913d;
    transition: color 0.5s;
  }
`;

export const ListAndSearch = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 4rem;
`;
