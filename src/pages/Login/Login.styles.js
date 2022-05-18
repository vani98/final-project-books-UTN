import styled from "styled-components";
import themes from "../../themes";

export const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem;
  > *:not(:last-child) {
    margin-bottom: 4rem;
  }
  input {
    width: 40rem;
    padding: 1rem 0.1rem;
    border: none;
    border-bottom: 0.1rem solid ${themes.colors.grey[1]};
    outline: none;
    &:focus {
      border-bottom: 0.1rem solid ${themes.colors.primary};
    }
  }
  label {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Forgotten = styled.p`
  color: ${themes.colors.grey[4]};
  cursor: pointer;
  text-decoration: underline;
  :hover {
    color: ${themes.colors.primary};
  }
`;

export const Error = styled.span`
  margin: 0.5rem 0;
  color: ${themes.colors.red[0]};
`;
