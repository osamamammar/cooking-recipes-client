import styled from "styled-components";

export const DishImage = styled.img`
  object-fit: cover;
  align-self: stretch;
  width: 100%;
  align-self: flex-start;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 907px) {
    position: unset;
    max-height: 330px;
    object-fit: cover;
  }
  @media (max-width: 908px) {
    grid-column: 1/3;
  }
`;
export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 908px) {
    grid-column: 1/3;
  }
`;

export const RecipeTitle = styled.h3`
  font-size: 32px;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;
export const RecipeSubTitle = styled.h4`
  font-size: 20px;
  font-weight: bold;
  :hover {
    opacity: 0.7;
  }
`;
export const IngredientList = styled.ul`
  list-style: square;
  list-style-position: inside;
`;
export const RecipeDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  max-width: 500px;
  min-width: 230px;
  @media (max-width: 907px) {
    max-width: 100%;
  }
`;

export const RecipeDescriptionContainer = styled.div`
  grid-column: 1/3;
`;
