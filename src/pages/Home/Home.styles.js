import styled from "styled-components";
import themes from "../../themes";

export const Welcome = styled.div`
  display: flex;
  align-items: center;
  height: 60rem;
  h2 {
    font-size: 3.5rem;
    font-weight: 700;
    > span {
      font-size: 4rem;
      font-weight: 700;
      color: ${themes.colors.primary};
    }
  }
  img {
    width: 40rem;
    margin-left: 14rem;
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
`;

export const Random = styled.div`
  padding: 7rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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

export const Container = styled.div`
  h3 {
    margin-top: 6rem;
    font-size: 3rem;
    text-align: center;
    > span {
      font-size: 3rem;
      color: ${themes.colors.primary};
    }
  }
  @media (${themes.devices.laptop}) {
    h3 {
      font-size: 2.2rem;
      > span {
        font-size: 2.2rem;
      }
    }
    ${Welcome} {
      h2 {
        font-size: 3rem;
        > span {
          font-size: 3rem;
        }
      }
      img {
        margin-left: 3rem;
      }
    }
    ${BooksAndPublishers} {
      p:first-child {
        margin-bottom: 4rem;
      }
    }
    ${Random} {
      flex-direction: column;
      button {
        margin-bottom: 4rem;
      }
    }
  }
  @media (${themes.devices.tablet}) {
    ${Welcome} {
      height: 100%;
      flex-direction: column;
      text-align: center;
      img {
        width: 33rem;
        margin-top: 8rem;
      }
    }
  }
  @media (${themes.devices.mobileL}) {
    ${Welcome} {
      img {
        width: 25rem;
        height: 19rem;
      }
    }
    ${Card} {
      div {
        height: 16rem;
      }
    }
    ${Random} {
      button {
        padding: 2rem 6rem;
      }
    }
  }
`;
