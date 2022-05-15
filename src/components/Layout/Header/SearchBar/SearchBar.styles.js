import styled from "styled-components";
import themes from "../../../../themes";

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
export const SearchInput = styled.input`
  width: 35rem;
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
  cursor: pointer;
`;

export const SearchResults = styled.div`
  position: absolute;
  top: 8rem;
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
    :hover{
      color: ${themes.colors.primary};
    }
`;
