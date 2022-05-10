import styled from "styled-components";

const startTransition = `0.2s ease`;
const endTransition = `0.2s ease`;

export const Data = styled.div`
  width: 100%;
  height: 0%;
  overflow: hidden;

  transition: ${startTransition};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.2s ease;

  transition: ${startTransition};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 20rem;
  aspect-ratio: 9/14;
  border: 1px solid grey;

  :hover {
    ${Data} {
      height: 90%;
      padding: 0.5rem 1rem;
      transition: ${endTransition};
    }
    ${Image} {
      height: 10%;
      transition: ${endTransition};
    }
  }
`;

export const Title = styled.p`
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
`;

export const Price = styled.p``;

export const ButtonWrapper = styled.div`
  border: 1px solid red;
`;
