import styled from "styled-components";
import SVGIcon from "../../components/SVGIcon";
import themes from "../../themes";

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
    margin-left: 1rem;
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 4rem;
`;

export const Container = styled.div`
  @media (${themes.devices.laptop}) {
    ${Table} {
      th {
        font-size: 1.6rem;
      }
    }
    ${Item} {
      td {
        font-size: 1.2rem;
      }
    }
    ${Delete} {
      height: 2.5rem;
    }
    ${Total} {
      td {
        font-size: 1.5rem;
      }
    }
  }
  @media (${themes.devices.tablet}) {
    ${Table} {
      th {
        font-size: 1.2rem;
      }
    }
    ${Item} {
      img {
        height: 7rem;
        width: 5rem;
      }
      td {
        font-size: 1rem;
      }
    }
  }
  @media (${themes.devices.mobileL}) {
    ${Table} {
      th {
        font-size: 1rem;
        padding: 0;
      }
    }
    ${Item} {
      img {
        height: 6rem;
        width: 4rem;
      }
    }
    ${Delete} {
      height: 1.7rem;
    }
    ${Total} {
      td {
        font-size: 1.2rem;
      }
    }
    ${ButtonContainer} {
      justify-content: center;
    }
  }
  @media (${themes.devices.mobileM}) {
    ${Title} {
      font-size: 2rem;
    }
    ${Table} {
      th {
        font-size: 0.7rem;
      }
    }
    ${Item} {
      img {
        height: 3rem;
        width: 2rem;
      }
      td {
        font-size: 0.7rem;
      }
    }
    ${Delete} {
      height: 1.3rem;
    }
    ${Total} {
      td {
        font-size: 1rem;
      }
    }
  }
`;
