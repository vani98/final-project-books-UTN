import styled from "styled-components";
import themes from "../../themes";

export const Welcome = styled.div`
  display: flex;
  align-items: center;
  height: 95vh;
  img {
    width: 40rem;
    margin-left: 14rem;
  }
  @media (${themes.devices.laptop}) {
    img {
      width: 30rem;
      margin-left: 3rem;
    }
  }

  @media (${themes.devices.tablet}) {
    height: 100%;

    flex-direction: column;
    text-align: center;
    img {
      margin-top: 8rem;
    }
  }

  @media (${themes.devices.mobileL}) {
    img {
      height: 19rem;
    }
  }
`;

export const Title = styled.p`
  font-size: 3.5rem;
  font-weight: 700;
  > span {
    font-size: 4rem;
    font-weight: 700;
    color: ${themes.colors.primary};
  }
  @media (${themes.devices.laptop}) {
    font-size: 3rem;
    > span {
      font-size: 3rem;
    }
  }
`;

export const Text = styled.p`
  margin-top: 6rem;
  font-size: 3rem;
  text-align: center;
  > span {
    font-size: 3rem;
    color: ${themes.colors.primary};
  }
  @media (${themes.devices.laptop}) {
    font-size: 2.2rem;
    > span {
      font-size: 2.2rem;
    }
  }
`;

export const BooksAndPublishers = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  p:first-child {
    margin-bottom: 9rem;
  }

  @media (${themes.devices.laptop}) {
    p:first-child {
      margin-bottom: 4rem;
    }
  }
`;
export const Card = styled.div`
  margin: 0 3rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  p {
    font-size: 1.8rem;
  }
  :hover div {
    transform: scale(0.9);
  }
  @media (${themes.devices.mobileL}) {
    div {
      height: 16rem;
    }
  }
`;

export const Random = styled.div`
  padding: 7rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (${themes.devices.laptop}) {
    flex-direction: column;
    button {
      margin-bottom: 4rem;
    }
  }

  @media (${themes.devices.mobileL}) {
    button {
      padding: 2rem 6rem;
    }
  }
`;

export const QuestionCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 30rem;
  border: 2px solid ${themes.colors.grey[1]};
  background-color: ${themes.colors.grey[3]};
  span {
    font-size: 20rem;
    color: ${themes.colors.grey[2]};
  }
`;
