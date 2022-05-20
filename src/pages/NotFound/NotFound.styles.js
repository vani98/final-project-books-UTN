import styled from "styled-components";
import themes from "../../themes";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 4rem;
  p {
    font-size: 3rem;

    color: ${themes.colors.grey[2]};
    font-weight: ${themes.fontWeight[0]};
  }
  p:first-child {
    font-size: 14rem;
  }
  p:last-child {
    font-size: 1.3rem;
    color: ${themes.colors.primary};
  }
`;
