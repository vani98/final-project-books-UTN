import styled from "styled-components";
import themes from "../../themes";

export const Welcome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
`;

export const WelcomeText = styled.p`
  font-size: 4rem;
  font-weight: 700;
  width: 49%;
  padding: 1rem;
  > span {
    font-size: 4rem;
    font-weight: 700;
    color: ${themes.colors.primary};
  }
`;

export const ImageBook = styled.img`
  width: 40rem;
`;
