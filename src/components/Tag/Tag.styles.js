import styled from "styled-components";
import themes from "../../themes";

export const Tag = styled.span`
  white-space: nowrap;
  font-size: 0.85rem;
  height: 1.6rem;
  margin-right: 0.5rem;
  padding: 0.2rem 0.4rem;
  border-radius: 2rem;
  color: ${themes.colors.white[0]};
  background-color: ${themes.colors.orange[2]};
`;
