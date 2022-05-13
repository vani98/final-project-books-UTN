import styled from "styled-components";
import themes from "../../themes";

export const PageTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5rem;

  span {
    font-size: 4rem;
    font-weight: 700;
    color: ${themes.colors.primary};
  }
`;

export const EditorialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 32rem);
  gap: 5rem;
  justify-content: center;
`;
