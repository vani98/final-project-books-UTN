import styled from "styled-components";
import themes from "../../themes";

export const Card = styled.div`
  width: 20rem;
  margin: 1rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
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
  width: 18rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const TagContainer = styled.div`
  border: 1px solid blue;
  padding: 0.5rem 0.2rem;
  display: flex;
  /* overflow-x: auto; */
`;
