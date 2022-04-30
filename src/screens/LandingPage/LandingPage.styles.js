import styled from "styled-components";

export const SectionContainer = styled.section`
  margin-block-end: 100px;
`;

export const CardsContainer = styled.ul`
  width: 100%;
  position: relative;
`;

export const DivWrapper = styled.div`
  margin-block-end: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  > a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #00000087;
    @media (max-width: 340px) {
      width: 100%;
    }
  }
`;
