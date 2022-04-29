import React from "react";
import { Container, RecipeDetails } from "../../components";
import { useAxiosFetch } from "../../hooks";
import { SectionContainer } from "../LandingPage/LandingPage.styles";
import {
  DishImage,
  DivWrapper,
  IngredientList,
  RecipeContainer,
  RecipeDescription,
  RecipeSubTitle,
  RecipeTitle,
} from "./RecipePage.styles";
import { useParams } from "react-router-dom";

const RecipePage = () => {
  const { id } = useParams();
  const { data, loading, error } = useAxiosFetch(
    `${process.env.REACT_APP_API_URL}/recipe/${id}`
  );
  return (
    <Container>
      <SectionContainer>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <RecipeDetails data={data}></RecipeDetails>
        )}
      </SectionContainer>
    </Container>
  );
};

export default RecipePage;
