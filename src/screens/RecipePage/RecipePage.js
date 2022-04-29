import React from "react";
import {
  Container,
  CTABtn,
  ErrorMessage,
  Loader,
  RecipeDetails,
} from "../../components";
import { useAxiosFetch } from "../../hooks";
import { useParams } from "react-router-dom";
import { GridContainer } from "./RecipePage.styles";

const RecipePage = () => {
  const { id } = useParams();
  const { data, loading, error } = useAxiosFetch(
    `${process.env.REACT_APP_API_URL}/recipe/${id}`,
    "GET"
  );

  return (
    <Container>
      {data && !error && !loading ? <CTABtn id={id}></CTABtn> : null}

      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <GridContainer>
          <RecipeDetails data={data}></RecipeDetails>
        </GridContainer>
      )}
    </Container>
  );
};

export default RecipePage;
