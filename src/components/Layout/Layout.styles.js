import styled from "styled-components";
import themes from "../../themes";

export const Container = styled.div`
  padding: 5rem 5%;
`;

export const ToTop = styled.a`
  position: fixed;
  background-color: ${themes.colors.primary};
  border-radius: 50%;
  bottom: 4.5rem;
  right: 1rem;
  cursor: pointer;
  :hover {
    background-color: ${themes.colors.orange[1]};
  }
  :active {
    transform: scale(0.9);
  }
`;
