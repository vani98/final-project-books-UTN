import styled from "styled-components";
import themes from "../../themes";

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 70vh;
`;

export const PageTitle = styled.p`
  margin-bottom: 2rem;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  span {
    font-size: 4rem;
    font-weight: 700;
    color: ${themes.colors.orange[0]};
  }
`;

export const PageSubTitle = styled.p`
  margin: 2rem;
  font-size: 3rem;
  text-align: center;
`;

export const BookContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 20rem);
  grid-gap: 3rem;

  justify-content: center;
`;
