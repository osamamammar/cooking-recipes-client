import React from "react";
import { Card } from "../../components";
import {
  CardsContainer,
  MainContainer,
  SectionContainer,
} from "./LandingPage.styles";

const LandingPage = () => {
  return (
    <>
      <MainContainer>
        <SectionContainer>
          <CardsContainer>
            <Card></Card>
          </CardsContainer>
        </SectionContainer>
      </MainContainer>
    </>
  );
};

export default LandingPage;
