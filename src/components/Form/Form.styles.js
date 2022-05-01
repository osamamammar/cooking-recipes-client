import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  margin-block-start: 20px;
  padding-inline: 20px;
  padding-block: 20px;
  border-radius: 10px;
  > label {
    font-size: 16px;
    > span {
      color: red;
    }
  }
  > input,
  textarea {
    width: 100%;
  }
  > input {
    padding-inline: 20px;
    padding-block: 10px;
  }
  > textarea {
    resize: none;
    padding-inline: 20px;
    padding-block: 10px;
    font-size: 16px;
  }
  > textarea.recipe-ingredients {
    min-height: 156px;
    @media (max-width: 466px) {
      min-height: 75px;
    }
  }
  > textarea.recipe-description {
    min-height: 306px;
    @media (max-width: 466px) {
      min-height: 150px;
    }
  }
  input#img {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
`;

export const SubmitBtn = styled.button`
  border: none;
  background-color: #8d8d8d;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const UploadImageLabel = styled.label`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #8d8d8d;
  color: white;
  padding-inline: 10px;
  padding-block: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover {
    opacity: 0.8;
  }
`;

export const UplodedPicture = styled.div`
  position: relative;
  inset-inline-end: 50%;
  inset-inline-start: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100%;
  width: 100vw;
  max-width: 100vw;
  height: 250px;
  max-height: 250px;
  background-color: #b9b9b9;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
