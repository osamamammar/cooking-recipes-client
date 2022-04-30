import React from "react";
import {
  Alert,
  Container,
  CTABtn,
  ErrorMessage,
  Loader,
  RecipeDetails,
} from "../../components";
import { useAxiosFetch } from "../../hooks";
import { useParams } from "react-router-dom";
import { GridContainer } from "./RecipePage.styles";
import { useLocation } from "react-router-dom";

const RecipePage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { data, loading, error } = useAxiosFetch(
    `${process.env.REACT_APP_API_URL}/recipe/${id}`,
    "GET"
  );

  return (
    <Container>
      {data && !error && !loading ? (
        <>
          <CTABtn id={id}></CTABtn>{" "}
          {location.state && location.state.success && (
            <Alert delay="2000">{location.state?.success}</Alert>
          )}
        </>
      ) : null}

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
