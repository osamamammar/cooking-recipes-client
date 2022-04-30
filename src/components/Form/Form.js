import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { upload } from "../../assets";
import axios from "axios";
import {
  FormContainer,
  SubmitBtn,
  UploadImageLabel,
  UplodedPicture,
} from "./Form.styles";
import Alert from "../Alert/Alert";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Form = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [preview, setPreview] = useState();
  const [recipeName, setSecipeName] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [errorMessageForm, setErrorMessageForm] = useState("");
  const [errorMessageUpload, setErrorMessageUpload] = useState("");

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    // select first image
    setSelectedFile(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const postData = async () => {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}/recipes`,
          {
            title: recipeName,
            description: recipeDescription,
            dish_img: selectedFile,
            ingredients: recipeIngredients,
          }
        );
        console.log(data);
      } catch (error) {
        setErrorMessageForm(error.response.data.message);
      }
    };
    postData();
  };

  useEffect(() => {
    if (selectedFile) {
      let formData = new FormData();
      formData.append("img", selectedFile);
      const uploadPicture = async () => {
        try {
          const { data } = await axios.post(
            `${process.env.REACT_APP_API_URL}/upload`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(data);
        } catch (error) {
          console.log(error);
          setErrorMessageUpload(error.response.data.message);
        }
      };
      uploadPicture();
    }
  }, [selectedFile]);

  // console.log(error);
  return (
    <FormContainer onSubmit={submitHandler}>
      <UplodedPicture>
        {selectedFile && (
          <img src={preview} alt="dishImage" width={100} height={100} />
        )}
      </UplodedPicture>

      <UploadImageLabel htmlFor="img" className="uploadImage">
        Click to upload image
        <img src={upload} alt="load-new-avatar" width={15} height={15} />
      </UploadImageLabel>

      <input
        type="file"
        name="img"
        id="img"
        onChange={onSelectFile}
        accept="image/*"
      />

      {(errorMessageForm || errorMessageUpload) && (
        <ErrorMessage marginBlockStart="unset">
          {errorMessageForm || errorMessageUpload}{" "}
        </ErrorMessage>
      )}

      <label htmlFor="recipeName">
        Recipe Name <span> *</span>
      </label>
      <input
        name="recipeName"
        id="recipeName"
        type="text"
        placeholder="Enter Recipe name"
        required
        value={recipeName}
        onChange={(e) => setSecipeName(e.target.value)}
      />
      <label htmlFor="recipeIngrediants">
        Recipe Ingredients <span>*</span>
      </label>
      <textarea
        name="recipeIngrediants"
        id="recipeIngrediants"
        className="recipe-ingredients"
        type="text"
        placeholder="please add as follows:
          Quantity, Unit, Ingredient @ 
           Quantity, Unit, Ingredient @
           Quantity, Unit, Ingredient
           ...etc
            "
        required
        value={recipeIngredients}
        onChange={(e) => setRecipeIngredients(e.target.value)}
      />
      <label htmlFor="recipeDescription">Recipe Description </label>
      <textarea
        name="recipeDescription"
        id="recipeDescription"
        className="recipe-description"
        placeholder="please add as follows:
          paragraph one @ 
          paragraph two @
          paragraph three
           ...etc
            "
        value={recipeDescription}
        onChange={(e) => setRecipeDescription(e.target.value)}
      ></textarea>

      <SubmitBtn type="submit" className="btn">
        submit
      </SubmitBtn>
    </FormContainer>
  );
};

export default Form;
