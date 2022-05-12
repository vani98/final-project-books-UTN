import styled from "styled-components";
import themes from "../../../themes";

export const Button = styled.button`
  padding: 1.5rem 10rem;
  font-size: 2rem;
  font-weight: ${themes.fontWeight[0]};
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  color: ${themes.colors.white[0]};
  background-color: ${themes.colors.primary};
  :hover {
    background-color: ${themes.colors.orange[1]};
  }
`;
