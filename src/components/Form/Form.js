import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { upload } from "../../assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  SubmitBtn,
  UploadImageLabel,
  UplodedPicture,
} from "./Form.styles";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Form = ({ btnTitle, data, id }) => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState("");
  const [preview, setPreview] = useState();
  const [recipeName, setRecipeName] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [errorMessageForm, setErrorMessageForm] = useState("");
  const [errorMessageUpload, setErrorMessageUpload] = useState("");

  useEffect(() => {
    if (data) {
      setRecipeName(data.title);
      setPreview(data && data.dish_img);
      setRecipeIngredients(data.ingredients);
      setRecipeDescription(data.description);
    }
  }, [data]);

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
  const submitUpdateHandler = (e) => {
    e.preventDefault();
    const putData = async () => {
      try {
        const { data } = await axios.put(
          `${process.env.REACT_APP_API_URL}/recipe/${id}`,
          {
            title: recipeName,
            description: recipeDescription,
            dish_img: selectedFile,
            ingredients: recipeIngredients,
          }
        );
        navigate(`/recipe/${id}`, { state: { success: data.message } });

        console.log(data);
      } catch (error) {
        setErrorMessageForm(error.response.data.message);
      }
    };
    putData();
  };

  useEffect(() => {
    if (selectedFile) {
      console.log(selectedFile);
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
        onChange={(e) => setRecipeName(e.target.value)}
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

      {!btnTitle ? (
        <SubmitBtn type="submit" className="btn">
          submit
        </SubmitBtn>
      ) : (
        <SubmitBtn className="btn" onClick={submitUpdateHandler}>
          Submit update
        </SubmitBtn>
      )}
    </FormContainer>
  );
};

export default Form;
