import styled from "styled-components";
import themes from "../../themes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 19rem;
  width: 25rem;
  padding: 2rem;
  text-align: center;
  color: ${themes.colors.primary};
  background-color: #fff;
  border-radius: 1rem;
  z-index: 100;
  border: 4px solid ${themes.colors.grey[0]};
  box-shadow: 0px 0px 73px 0px rgba(0, 0, 0, 0.15);
`;
