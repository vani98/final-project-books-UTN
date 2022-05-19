import styled from "styled-components";
import themes from "../../themes";

const startTransition = `0.2s ease`;
const endTransition = `0.2s ease`;

export const Data = styled.div`
  width: 100%;
  height: 0%;
  overflow: hidden;
  transition: ${startTransition};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  height: 30rem;
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
  text-align: center;
  font-weight: 700;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${themes.colors.primary};
`;

export const Price = styled.p`
  font-weight: ${themes.fontWeight[0]};
  color: ${themes.colors.primary};
  font-size: 1.7rem;
`;

export const ButtonWrapper = styled.div`
  margin-left: 0.8rem;
  padding: 0.8rem;
  border-radius: 5rem;
  cursor: pointer;
  background-color: black;
  transition: 0.5s;

  :active {
    background-color: ${themes.colors.grey[4]};
    transition: 0s;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
  }
`;
