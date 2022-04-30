import React from "react";
import { Form, MainWrapper } from "../../components";
import { useOverflow } from "../../hooks";
import { SectionContainer } from "../LandingPage/LandingPage.styles";

const AddNewRecipePage = () => {
  useOverflow();
  return (
    <MainWrapper marginBlockStart="40px" width="95%">
      <h2>Add New Recipe</h2>
      <SectionContainer>
        <Form></Form>
      </SectionContainer>
    </MainWrapper>
  );
};

export default AddNewRecipePage;
