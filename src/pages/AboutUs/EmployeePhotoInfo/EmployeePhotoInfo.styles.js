import styled from "styled-components";
import themes from "../../../themes";

export const Container = styled.div`
  margin: 2rem;
  text-align: center;
  p:last-child {
    color: ${themes.colors.primary};
  }
`;
export const Photo = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  :hover {
    filter: brightness(70%);
  }
`;
