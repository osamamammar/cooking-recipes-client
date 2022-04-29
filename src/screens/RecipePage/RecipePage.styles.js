import styled from "styled-components";
import { SectionContainer } from "../LandingPage/LandingPage.styles";

export const GridContainer = styled(SectionContainer)`
  display: grid;
  grid-template-columns: minmax(100px, 1fr) 1fr;
  justify-items: flex-start;
  align-items: flex-start;
  gap: 25px;
  margin-block-start: 12px;
  @media (max-width: 907px) {
    grid-template-columns: 1fr;
  }
`;
