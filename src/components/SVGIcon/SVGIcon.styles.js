import styled from "styled-components";

export const SVGIcon = styled.div`
  mask: url(${(props) => props.image}) no-repeat center / contain;
  background-color: ${(props) => props.color};
  height: ${(props) => props.size};
  width: ${(props) => props.size};
`;
