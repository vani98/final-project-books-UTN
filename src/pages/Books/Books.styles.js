import styled from "styled-components";
import themes from "../../themes";

export const PageTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 4rem;
  text-align: center;
  span {
    font-size: 4rem;
    color: ${themes.colors.primary};
  }
  @media (${themes.devices.laptop}) {
    font-size: 3rem;
    span {
      font-size: 3rem;
    }
  }
`;

export const PageSubTitle = styled.p`
  margin-bottom: 5rem;
  font-size: 3rem;
  text-align: center;
  @media (${themes.devices.laptop}) {
    font-size: 2rem;
  }
`;

export const BookContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 20rem);
  grid-gap: 3rem;

  justify-content: center;
`;
