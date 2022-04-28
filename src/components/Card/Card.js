import React from "react";
import {
  CardDescription,
  CardTitle,
  DishImage,
  DivWrapper,
  Recipe,
  StyledLink,
} from "./Card.styles";

const Card = ({ recipe }) => {
  return (
    <>
      <Recipe>
        <StyledLink to={`/recipe/${recipe._id}`}>
          <DishImage
            src={recipe.dish_img}
            alt="dish image"
            width={300}
            height={200}
            loading="lazy"
            title="dish image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://fooduncut.com/wp-content/uploads/2021/08/Chinese-Cooking-Hacks.jpg";
            }}
          />
          <DivWrapper>
            <CardTitle>{recipe.title}</CardTitle>
            <CardDescription>{recipe.description}</CardDescription>
          </DivWrapper>
        </StyledLink>
      </Recipe>
    </>
  );
};

export default Card;
