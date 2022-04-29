import React from "react";
import {
  DishImage,
  DivWrapper,
  IngredientList,
  RecipeContainer,
  RecipeDescription,
  RecipeSubTitle,
  RecipeTitle,
} from "./RecipeDetails.styles";

const RecipeDetails = ({ data }) => {
  return (
    <DivWrapper>
      <DishImage
        src={data && data.dish_img}
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
        <RecipeTitle>Recipe Name</RecipeTitle>
        <RecipeSubTitle>Ingrediants:</RecipeSubTitle>

        <IngredientList>
          {data &&
            data.ingredients &&
            data.ingredients
              .split(",")
              .map((ingredient, index) => <li key={index}>{ingredient}</li>)}
        </IngredientList>

        <RecipeSubTitle>Description:</RecipeSubTitle>
        <RecipeDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
          repellendus accusantium hic iure quam exercitationem incidunt expedita
          fugit sequi voluptate perferendis corrupti laboriosam dicta. Aliquid
          voluptatum numquam sed a adipisci? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Id, repellendus
        </RecipeDescription>
      </RecipeContainer>
    </DivWrapper>
  );
};

export default RecipeDetails;
