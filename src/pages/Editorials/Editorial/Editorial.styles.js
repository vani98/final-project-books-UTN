import styled from "styled-components";
import themes from "../../../themes";

export const Container = styled.div`
  text-align: center;
  padding: 2.7rem;
  box-shadow: 0px 0px 73px 0px rgba(0, 0, 0, 0.18);
  border-radius: 0.5rem;
  p {
    margin-top: 2rem;
    font-size: 1.4rem;
    font-weight: ${themes.fontWeight[0]};
  }
`;
export const EditorialImg = styled.img`
  height: 18rem;
  width: 100%;
`;
