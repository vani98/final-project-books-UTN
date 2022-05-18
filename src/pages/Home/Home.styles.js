import styled from "styled-components";
import themes from "../../themes";

export const Welcome = styled.div`
  display: flex;
  align-items: center;
  height: 95vh;
  img {
    width: 40rem;
    margin: 14rem;
  }
`;

export const Title = styled.p`
  font-size: 4rem;
  font-weight: 700;
  > span {
    font-size: 4rem;
    font-weight: 700;
    color: ${themes.colors.primary};
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
`;

export const ShippingInfo = styled.img`
  width: 100%;
  height: 28rem;
  margin: 5rem 0;
`;

export const BooksAndPublishers = styled.div`
  div {
    display: flex;
    justify-content: space-around;
  }
`;
export const Card = styled.div`
  margin: 9rem;
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
  padding: 7rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const QuestionCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 31rem;
  border: 2px solid ${themes.colors.grey[1]};
  background-color: ${themes.colors.grey[3]};
  span {
    font-size: 20rem;
    color: ${themes.colors.grey[2]};
  }
`;
