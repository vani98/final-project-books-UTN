import styled from "styled-components";
import themes from "../../../themes";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${themes.colors.grey[0]};
  background-color: ${themes.colors.white[0]};
  border-bottom: 2px solid ${themes.colors.grey[0]};
`;

export const FooterTop = styled.div`
  border-bottom: 1px solid ${themes.colors.grey[0]};
  display: flex;
  justify-content: space-between;
  padding: 5rem 7rem;
  @media (${themes.devices.laptop}) {
    text-align: center;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    gap: 3rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 4rem;

  @media (${themes.devices.laptop}) {
    margin-bottom: 2.5rem;
  }
`;

export const Contact = styled.div`
  div {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export const Icon = styled.img`
  height: 4.5rem;
  :hover {
    opacity: 90%;
  }
`;

export const SocialMedia = styled.div`
  text-align: center;
  div {
    display: flex;
    gap: 3rem;
  }
  a {
    cursor: pointer;
  }
`;

export const Payment = styled.div`
  div {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${themes.colors.grey[3]};
  a {
    color: black;
    text-decoration: none;
    :hover {
      color: ${themes.colors.primary};
    }
  }
  @media (${themes.devices.laptop}) {
    flex-direction: column;
    padding-top: 0;
    a {
      margin: 2rem 0;
      font-size: 1.4rem;
    }
  }
`;

export const Navigation = styled.div`
  a {
    margin-left: 4rem;
  }

  @media (${themes.devices.mobileL}) {
    a {
      margin-left: 1.7rem;
    }
  }
`;
