import styled from "styled-components";
import themes from "../../../../themes";

export const SearchInput = styled.input`
  width: 30rem;
  height: 3.6rem;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-size: 1.3rem;
  font-style: italic;
  border: 2px solid ${themes.colors.grey[0]};
  :focus {
    outline: none;
  }
`;

export const SearchButton = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 2rem;
  margin: auto;
  height: 2rem;
  color: ${themes.colors.grey[0]};
`;

export const SearchResults = styled.div`
  position: absolute;
  top: 9rem;
  right: 0;
  padding: 1rem;
  width: 100%;
  background-color: #fff;
  font-size: 1rem;
  text-align: center;
  border-bottom: 2px solid ${themes.colors.grey[0]};
`;
export const BookFound = styled.p`
  cursor: pointer;
  :hover {
    color: ${themes.colors.primary};
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media (${themes.devices.laptop}) {
    ${SearchInput} {
      height: 3.5rem;
      width: 19rem;
      font-size: 1rem;
      padding: 0rem 1.5rem;
    }
    ${SearchButton} {
      height: 1.5rem;
    }
  }
  @media (${themes.devices.tablet}) {
    ${SearchInput} {
      height: 3.2rem;
      width: 18rem;
    }
    ${SearchButton} {
      height: 1rem;
      right: 1.2rem;
    }
  }
  @media (${themes.devices.mobileL}) {
    ${SearchInput} {
      height: 2.9rem;
      width: 14.2rem;
      padding: 0rem 0.9rem;
      font-size: 0.8rem;
    }
  }
  @media (${themes.devices.mobileM}) {
    ${SearchInput} {
      font-size: 0.7rem;
      width: 13rem;
    }
  }
  @media (${themes.devices.mobileS}) {
    ${SearchInput} {
      font-size: 0.64rem;
      width: 12rem;
      height: 2.7rem;
    }
  }
`;
