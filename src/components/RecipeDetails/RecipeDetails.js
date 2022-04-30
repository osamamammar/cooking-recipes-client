import React from "react";
import {
  DishImage,
  IngredientList,
  RecipeContainer,
  RecipeDescription,
  RecipeSubTitle,
  RecipeTitle,
} from "./RecipeDetails.styles";

const RecipeDetails = ({ data }) => {
  return (
    <>
      <DishImage
        src={`${process.env.REACT_APP_API_URL}/images/${data && data.dish_img}`}
        alt={data && data.title}
        title={`${data && data.title}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://fooduncut.com/wp-content/uploads/2021/08/Chinese-Cooking-Hacks.jpg";
        }}
        loading="lazy"
        width={400}
        height={266}
      />
      <RecipeContainer>
        <RecipeTitle>{data && data.title}</RecipeTitle>
        <RecipeSubTitle>Ingrediants:</RecipeSubTitle>

        <IngredientList>
          {data &&
            data.ingredients &&
            data.ingredients
              .split("@")
              .map(
                (ingredient, index) =>
                  ingredient.length > 0 && <li key={index}>{ingredient}</li>
              )}
        </IngredientList>

        <RecipeSubTitle>Description:</RecipeSubTitle>
        <ol style={{ listStyle: "auto", listStylePosition: "inside" }}>
          {data && data.description && data.description.length > 0 ? (
            data.description.split("@").map(
              (description, index) =>
                description.length > 0 && (
                  <li key={index}>
                    <RecipeDescription style={{ display: "inline" }}>
                      {description}
                    </RecipeDescription>
                  </li>
                )
            )
          ) : (
            <RecipeDescription>There is No description</RecipeDescription>
          )}
        </ol>
      </RecipeContainer>
    </>
  );
};

export default RecipeDetails;
