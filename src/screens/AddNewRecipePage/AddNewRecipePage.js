import React from "react";
import { useEffect } from "react";
import { Form, MainWrapper } from "../../components";
import { SectionContainer } from "../LandingPage/LandingPage.styles";

// select parent element in the DOM
const parentElement = document.querySelector("#root");

const AddNewRecipePage = () => {
  
  useEffect(() => {
    const overflowHidden = () => parentElement.classList.add("overflow-hidden");
    overflowHidden();
  }, []);

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
