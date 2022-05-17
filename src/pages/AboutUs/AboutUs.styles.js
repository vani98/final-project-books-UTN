import styled from "styled-components";
import themes from "../../themes";

export const Container = styled.div`
  h2 {
    font-size: 4rem;
    text-align: center;
    span {
      font-size: 4rem;
      color: ${themes.colors.primary};
    }
  }
  h2:first-child {
    margin-bottom: 3rem;
  }
  h2:not(:first-child) {
    margin: 3rem 0;
  }
`;

export const Team = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.p`
  font-size: 2.2rem;
  text-align: center;
  span {
    font-size: 2.2rem;
    color: ${themes.colors.primary};
  }
`;
