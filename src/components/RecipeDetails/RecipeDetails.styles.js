import styled from "styled-components";

export const DivWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, 1fr) 1fr;
  justify-items: flex-start;
  align-items: flex-start;
  gap: 25px;
  @media (max-width: 907px) {
    grid-template-columns: 1fr;
  }
`;

export const DishImage = styled.img`
  object-fit: cover;
  align-self: stretch;
  width: 100%;
  position: sticky;
  inset-block-start: 20px;
  align-self: flex-start;
  @media (max-width: 907px) {
    position: unset;
    max-height: 200px;
    object-fit: cover;
  }
`;
export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  /* margin-inline-start: 20px; */
`;

export const RecipeTitle = styled.h3`
  font-size: 38px;
  font-weight: bold;
`;
export const RecipeSubTitle = styled.h4`
  font-size: 20px;
  font-weight: bold;
`;
export const IngredientList = styled.ol`
  list-style: number;
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
