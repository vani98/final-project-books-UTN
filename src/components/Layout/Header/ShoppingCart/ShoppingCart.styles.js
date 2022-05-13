import styled from "styled-components";
import themes from "../../../../themes";

export const Container = styled.div`
  margin: 0 3rem;
  position: relative;
`;

export const BubbleCount = styled.span`
  position: absolute;
  top: 0;
  left: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.63rem;
  height: 1.63rem;
  color: ${themes.colors.white[0]};
  font-size: 0.95rem;
  border-radius: 50%;
  background-color: ${themes.colors.red[0]};
`;
