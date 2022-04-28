import React from "react";
import { cookingLogo } from "../../assets";
import { DivWrapper, HeaderWrapper, StyledLink } from "./Header.styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <h1 className="visually-hidden">Cooking Recipes</h1>
      <DivWrapper>
        <StyledLink to={"/"}>
          {/* <img
            src={cookingLogo}
            alt="cooking logo"
            width={50}
            height={50}
          ></img> */}
          <h2>Cooking Recipes</h2>
        </StyledLink>
      </DivWrapper>
    </HeaderWrapper>
  );
};

export default Header;
