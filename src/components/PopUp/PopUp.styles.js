import styled from "styled-components";
import themes from "../../themes";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  color: ${themes.colors.primary};
  width: 30vw;
  top: 6.5rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem 2rem;
  border: 1px solid ${themes.colors.grey[0]};
`;
