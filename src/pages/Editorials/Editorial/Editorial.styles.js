import styled from "styled-components";
import themes from "../../../themes";
export const Container = styled.a`
  img {
    box-shadow: 0px 0px 73px 0px rgba(0, 0, 0, 0.2);
    height: 20rem;
    width: 100%;
    object-fit: contain;
    :hover {
      transition: all 0.6s ease-in 0.1s;
      transform: rotateY(360deg);
      opacity: 65%;
    }
  }
`;
