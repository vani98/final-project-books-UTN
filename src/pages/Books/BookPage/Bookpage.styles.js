import styled from "styled-components";
import themes from "../../../themes";

export const Title = styled.h2`
  font-size: 3rem;
`;

export const Image = styled.img`
  height: 43rem;
  min-width: 30rem;
  margin-right: 4rem;
`;

export const Tag = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1.6rem 0;
  p {
    margin-right: 0.6rem;
    padding: 0.3rem 1rem;
    font-size: 1.3rem;
    border-radius: 2rem;
    color: white;
    background-color: ${themes.colors.primary};
  }
`;

export const Details = styled.div`
  div {
    display: flex;
  }
  div p:first-child {
    padding: 0 0.5rem;
    color: ${themes.colors.grey[2]};
    border-left: 3px solid ${themes.colors.primary};
  }
`;

export const Action = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 3rem;
    font-weight: ${themes.fontWeight[0]};
    color: ${themes.colors.primary};
  }
  @media (${themes.devices.tablet}) {
    button {
      padding: 0 4rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-bottom: 0.7rem;
    font-size: 1.42rem;
  }
  @media (${themes.devices.tablet}) {
    flex-direction: column;
    text-align: center;
    ${Title} {
      margin-top: 2rem;
    }
    ${Image} {
      margin: auto;
    }
    ${Tag} {
      justify-content: center;
    }
  }
`;
