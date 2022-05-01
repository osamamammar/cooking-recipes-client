import React from "react";
import { DivWrapper, HeaderWrapper, StyledLink } from "./Header.styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <h1 className="visually-hidden">Cooking Recipes</h1>
      <DivWrapper>
        <StyledLink to={"/"}>
          <h2>Cooking Recipes</h2>
        </StyledLink>
      </DivWrapper>
    </HeaderWrapper>
  );
};

export default Header;
