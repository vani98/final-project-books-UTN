import styled from "styled-components";
import themes from "../../../themes";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: ${themes.colors.primary};
  }
  p {
    margin-bottom: 0.7rem;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  color: ${themes.colors.primary};
`;

export const Image = styled.img`
  height: 43rem;
  width: 30rem;
  margin-right: 4rem;
`;

export const Tag = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1.6rem 0;
  p {
    margin-right: 0.6rem;
    padding: 0.3rem 1rem;
    font-size: 1.3rem;
    border-radius: 2rem;
    color: white;
    background-color: ${themes.colors.primary};
  }
`;

export const Action = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 3rem;
    font-weight: ${themes.fontWeight[0]};
    color: ${themes.colors.primary};
  }
`;
