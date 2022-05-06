import styled from "styled-components";
import themes from "../../themes";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  border-bottom: 2px solid ${(props) => themes.colors.grey[0]};
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
    transition: color 0.2s;
  }

  a:hover {
    color: ${(props) => themes.colors.orange[0]};
    transition: color 0.2s;
  }
`;

export const ListAndSearch = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 2rem;
`;
