import styled from "styled-components";
import themes from "../../themes";

export const Container = styled.div`
  margin: 0 1rem;
  position: relative;
`;

export const BubbleCount = styled.span`
  position: absolute;
  top: 0;
  left: 65%;
  width: 1.4rem;
  height: 1.4rem;
  color: ${(props) => themes.colors.white[0]};
  font-size: 1rem;
  text-align: center;
  border-radius: 50%;
  background-color: ${(props) => themes.colors.red[0]};
`;
