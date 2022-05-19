import styled from "styled-components";
import themes from "../../themes";

export const Container = styled.div`
  h2 {
    font-size: 4rem;
    text-align: center;
    span {
      font-size: 4rem;
      color: ${themes.colors.primary};
    }
  }
  h2:first-child {
    margin-bottom: 3rem;
  }
  h2:not(:first-child) {
    margin: 3rem 0;
  }
  @media (${themes.devices.laptop}) {
    h2 {
      font-size: 3rem;
      span {
        font-size: 3rem;
      }
    }
  }
`;

export const Team = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.p`
  font-size: 2.2rem;
  text-align: center;
  span {
    font-size: 2.2rem;
    color: ${themes.colors.primary};
  }
`;

export const ContactForm = styled.div`
  padding: 5rem 10rem;
  border: 1px solid ${themes.colors.grey[1]};
  margin-top: 4rem;
  h2 {
    text-align: left;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input,
  label {
    margin-bottom: 1rem;
  }
  label {
    font-size: 1.9rem;
  }
  input {
    border: none;
    border-bottom: 2px solid ${themes.colors.grey[1]};
    padding: 0.8rem 0;
    background-color: transparent;
    :focus {
      outline: none;
      border-bottom: 2px solid ${themes.colors.primary};
    }
  }
  textarea {
    padding: 0.2rem;
    border: 2px solid ${themes.colors.grey[1]};
    height: 150px;
    :focus {
      outline: none;
      border: 2px solid ${themes.colors.primary};
    }
  }
  button {
    margin-top: 4rem;
    padding: 0;
  }
  @media (${themes.devices.tablet}) {
    padding: 5rem 5rem;
  }
`;

export const Error = styled.p`
  margin: 0.5rem 0;
  color: ${themes.colors.red[0]};
`;

export const Sent = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 2rem;
  color: ${themes.colors.green[0]};
`;
