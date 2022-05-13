import styled from "styled-components";
import SVGIcon from "../../components/SVGIcon";
import themes from "../../themes";

export const Container = styled.div`
  min-height: 70vh;
`;

export const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

export const NothingOnCart = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;

  p {
    margin-bottom: 3rem;
    font-size: 3rem;
    color: ${themes.colors.grey[2]};
    font-weight: ${themes.fontWeight[0]};
  }
`;

export const Table = styled.table`
  border-spacing: 0;

  width: 100%;
  th {
    font-size: 2.4rem;
    padding: 1rem;
  }
`;

export const Item = styled.tr`
  text-align: center;

  td {
    padding: 1.5rem 0;
  }

  :nth-child(odd) {
    background-color: ${themes.colors.grey[0]};
  }

  img {
    height: 9rem;
    width: 7rem;
    border-radius: 0.8rem;
    filter: brightness(80%);
  }
`;

export const Delete = styled(SVGIcon)`
  margin: auto;
  transition: 0.2s;

  :hover {
    background-color: ${themes.colors.red[0]};

    transition: 0.2s ease;
  }
`;

export const Total = styled.tr`
  font-weight: ${themes.fontWeight[0]};
  color: ${themes.colors.primary};
  text-align: center;
  td {
    font-size: 2rem;
    padding: 1rem 2rem;
  }
  td:nth-child(1) {
    text-align: start;
  }
`;

export const ButtonContainer = styled.p`
  text-align: end;
  margin-top: 4rem;
`;
