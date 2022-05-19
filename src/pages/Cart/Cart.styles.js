import styled from "styled-components";
import SVGIcon from "../../components/SVGIcon";
import themes from "../../themes";

export const Container = styled.div`
  min-height: 70vh;
`;

export const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  @media (${themes.devices.mobileM}) {
    font-size: 2rem;
  }
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
  @media (${themes.devices.laptop}) {
    th {
      font-size: 1.6rem;
    }
  }
  @media (${themes.devices.tablet}) {
    th {
      font-size: 1.2rem;
    }
  }
  @media (${themes.devices.mobileL}) {
    th {
      font-size: 1rem;
      padding: 0;
    }
  }
  @media (${themes.devices.mobileM}) {
    th {
      font-size: 0.7rem;
    }
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
    margin-left: 1rem;
    height: 9rem;
    width: 7rem;
    border-radius: 0.8rem;
    filter: brightness(80%);
  }
  @media (${themes.devices.laptop}) {
    td {
      font-size: 1.2rem;
    }
  }
  @media (${themes.devices.tablet}) {
    img {
      height: 7rem;
      width: 5rem;
    }
    td {
      font-size: 1rem;
    }
  }
  @media (${themes.devices.mobileL}) {
    img {
      height: 6rem;
      width: 4rem;
    }
  }
  @media (${themes.devices.mobileM}) {
    img {
      height: 3rem;
      width: 2rem;
    }
    td {
      font-size: 0.7rem;
    }
  }
`;

export const Delete = styled(SVGIcon)`
  margin: auto;
  transition: 0.2s;

  :hover {
    background-color: ${themes.colors.red[0]};

    transition: 0.2s ease;
  }
  @media (${themes.devices.laptop}) {
    height: 2.5rem;
  }
  @media (${themes.devices.mobileL}) {
    height: 1.7rem;
  }
  @media (${themes.devices.mobileM}) {
    height: 1.3rem;
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
  @media (${themes.devices.laptop}) {
    td {
      font-size: 1.5rem;
    }
  }
  @media (${themes.devices.mobileL}) {
    td {
      font-size: 1.2rem;
    }
  }
  @media (${themes.devices.mobileM}) {
    td {
      font-size: 1rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 4rem;
  @media (${themes.devices.mobileL}) {
    justify-content: center;
  }
`;
