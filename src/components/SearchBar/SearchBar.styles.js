import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
export const SearchInput = styled.input`
  width: 40rem;
  height: 3.6rem;
  padding: 1rem 2rem;
  border-radius: 5rem;
  font-size: 1.3rem;
  font-style: italic;
  border: 2px solid #eee;

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
`;
