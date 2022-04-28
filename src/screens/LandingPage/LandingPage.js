import React from "react";
import { Card } from "../../components";
import { useAxiosFetch } from "../../hooks";
import {
  CardsContainer,
  MainContainer,
  SectionContainer,
} from "./LandingPage.styles";

const LandingPage = () => {
  const { data, loading, error } = useAxiosFetch(
    `${process.env.REACT_APP_API_URL}/recipes`
  );

  console.log(data);
  return (
    <>
      <MainContainer>
        <SectionContainer>
          <CardsContainer>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : data && data.length === 0 ? (
              <p>No recipes yet</p>
            ) : (
              data &&
              data.map((recipe) => (
                <Card key={recipe._id} recipe={recipe}></Card>
              ))
            )}
          </CardsContainer>
        </SectionContainer>
      </MainContainer>
    </>
  );
};

export default LandingPage;
