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
  padding: 3rem 7rem;
  @media (${themes.devices.laptop}) {
    text-align: center;
    flex-direction: column;
    align-items: center;
    > * {
      margin: 2rem;
    }
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 4rem;
`;

export const Contact = styled.div`
  p {
    margin: 0 0 2rem 2rem;
  }
  div {
    display: flex;
  }
  @media (${themes.devices.laptop}) {
    div {
      margin-right: 2rem;
    }
    p {
      margin: auto;
    }
  }
`;

export const Icon = styled.img`
  height: 4rem;
  :hover {
    opacity: 90%;
  }
`;

export const SocialMedia = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
  }
  a {
    cursor: pointer;
  }
`;

export const Payment = styled.div`
  div {
    display: grid;
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

export const Copy = styled.a`
  :hover {
    color: ${themes.colors.orange[1]};
  }
`;

export const Navigation = styled.div`
  a {
    margin-left: 4rem;
  }
  a:hover {
    opacity: 60%;
  }

  @media (${themes.devices.mobileL}) {
    a {
      margin-left: 1.7rem;
    }
  }
  /* a {
    } */
`;
