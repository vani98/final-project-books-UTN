import styled from "styled-components";

export const Card = styled.div`
  width: 25rem;
  margin: 1rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 6px;
`;

export const CardHeader = styled.div`
  img {
    width: 100%;
    max-height: 24rem;
  }
`;

export const CardBody = styled.div`
  padding: 1.5rem;
`;
