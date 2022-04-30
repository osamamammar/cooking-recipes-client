import React from "react";
import {
  Alert,
  Card,
  ErrorMessage,
  Loader,
  MainWrapper,
} from "../../components";
import { Link } from "react-router-dom";

import { useAxiosFetch } from "../../hooks";
import {
  CardsContainer,
  DivWrapper,
  SectionContainer,
} from "./LandingPage.styles";
import { useLocation } from "react-router-dom";
import { add } from "../../assets";

const LandingPage = () => {
  const location = useLocation();

  const { data, loading, error } = useAxiosFetch(
    `${process.env.REACT_APP_API_URL}/recipes`,
    "GET"
  );

  return (
    <>
      <MainWrapper>
        <DivWrapper>
          <h3 style={{ fontSize: "24px" }}>All Recipes</h3>
          <Link
            to={"/add-new-recipe"}
            title="go to add new recipe"
            className="btn"
          >
            Add New
            <img src={add} alt="add icon" />
          </Link>
        </DivWrapper>
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
