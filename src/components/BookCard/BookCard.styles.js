import styled from "styled-components";
import themes from "../../themes";

export const Card = styled.div`
  width: 20rem;
  margin: 1rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  /* :hover {
    opacity: 0;
  } */
`;

export const CardHeader = styled.div`
  height: 24rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transition: transform 0.9s;
  }
`;

export const CardBody = styled.div`
  padding: 0.6rem;
  > p {
    font-size: 1.4rem;
  }
`;

export const Title = styled.p`
  text-align: center;
  margin-bottom: 0.4rem;
  letter-spacing: 0.1rem;
`;
