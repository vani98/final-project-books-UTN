import styled, { keyframes } from "styled-components";
import SVGIcon from "../SVGIcon";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled(SVGIcon)`
  animation: ${rotate} 1s steps(8, end) infinite;
`;
