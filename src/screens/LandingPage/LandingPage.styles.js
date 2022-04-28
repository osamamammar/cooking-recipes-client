import styled from "styled-components";

export const MainContainer = styled.main`
  margin-inline: auto;
  max-width: 1220px;
  width: 65%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const SectionContainer = styled.section`
  margin-block-start: 100px;
`;

export const CardsContainer = styled.ul`
  width: 100%;
`;
