import React from "react";
import {
  Alert,
  Card,
  ErrorMessage,
  Loader,
  MainWrapper,
} from "../../components";

import { useAxiosFetch } from "../../hooks";
import { CardsContainer, SectionContainer } from "./LandingPage.styles";
import { useLocation } from "react-router-dom";

const LandingPage = () => {
  const location = useLocation();

  const { data, loading, error } = useAxiosFetch(
    `${process.env.REACT_APP_API_URL}/recipes`,
    "GET"
  );

  return (
    <>
      <MainWrapper>
        <SectionContainer>
          {location.state && location.state.success && (
            <Alert delay="2000">{location.state?.success}</Alert>
          )}

          {loading ? (
            <Loader />
          ) : (
            <CardsContainer>
              {error ? (
                <ErrorMessage>{error}</ErrorMessage>
              ) : data && data.length === 0 ? (
                <p style={{ fontSize: "40px" }}>No recipes, please add one!</p>
              ) : (
                data &&
                data.map((recipe) => (
                  <Card key={recipe._id} recipe={recipe}></Card>
                ))
              )}
            </CardsContainer>
          )}
        </SectionContainer>
      </MainWrapper>
    </>
  );
};

export default LandingPage;
