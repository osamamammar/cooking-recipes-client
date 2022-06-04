import React from "react";
import { deleteIcon } from "../../assets";
import {
  CardDescription,
  CardTitle,
  DishImage,
  DivWrapper,
  Recipe,
  StyledLink,
} from "./Card.styles";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useDelete } from "../../hooks";

const Card = ({ recipe }) => {
  const id = recipe._id;
  const path = "landingpage";
  const { deleteRecipe, errorMessage } = useDelete({
    id,
    path,
  });

  return (
    <>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <Recipe>
        <button
          className="delete-btn"
          onClick={deleteRecipe}
          style={{
            position: "absolute",
            right: "0",
            zIndex: "9999",
            cursor: "pointer",
            background: "transparent",
            border: "none",
            paddingBlock: "15px",
            paddingInline: "15px",
          }}
        >
          <img
            src={deleteIcon}
            alt="delete-icon"
            width={25}
            height={25}
            className="delete-icon"
          />
        </button>
        <StyledLink to={`/recipe/${recipe._id}`}>
          <DishImage
            src={`${process.env.REACT_APP_API_URL}${recipe.dish_img}`}
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
            <CardDescription>
              {recipe.description.split("@").join(" ")}
            </CardDescription>
          </DivWrapper>
        </StyledLink>
      </Recipe>
    </>
  );
};

export default Card;
