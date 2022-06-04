import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FormContainer,
  SubmitBtn,
  UploadImageLabel,
  UplodedPicture,
} from "./Form.styles";
import { useSelectedImage } from "../../hooks";
import { submitIcon, upload } from "../../assets";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Form = ({ btnTitle, data, id, UploadImgBtn }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { selectedFile, preview, setPreview, onSelectFile, imageBase64 } =
    useSelectedImage();

  const [recipeName, setRecipeName] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [errorMessageForm, setErrorMessageForm] = useState("");
  const [errorMessageUpload, setErrorMessageUpload] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const { displayUploadImgBtn } = location.state || {
    displayUploadImgBtn: false,
  };

  useEffect(() => {
    if (imageBase64) {
      const url = imageBase64;
      console.log(url);
      fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          var formData = new FormData();
          formData.append("img", blob);

          // Upload to server
          const uploadImageToServer = async () => {
            try {
              let response = await fetch(
                `${process.env.REACT_APP_API_URL}/upload/${id}`,
                {
                  method: "POST",
                  body: formData,
                }
              );
              const data = await response.json();
              setPictureUrl(data && data.pictureUrl);
            } catch (err) {
              // Handle errors here
              setErrorMessageUpload(err.response.data.message);
            }
          };
          uploadImageToServer();
        });
    }
  }, [imageBase64, id]);

  useEffect(() => {
    if (data) {
      setRecipeName(data.title);
      setPreview(`${process.env.REACT_APP_API_URL}${data && data.dish_img}`);
      setRecipeIngredients(data.ingredients);
      setRecipeDescription(data.description);
    }
  }, [data, setPreview]);

  const submitHandler = (e) => {
    e.preventDefault();
    const postData = async () => {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}/recipes`,
          {
            title: recipeName,
            description: recipeDescription,
            dish_img: pictureUrl ? pictureUrl : "",
            ingredients: recipeIngredients,
          }
        );
        console.log(data);
        navigate(`/recipe/${data._id}/edit`, {
          state: {
            success: "your recipe posted successfuly",
            displayUploadImgBtn: true,
          },
        });
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
        const { data: dataUpdata } = await axios.put(
          `${process.env.REACT_APP_API_URL}/recipe/${id}`,
          {
            title: recipeName,
            description: recipeDescription,
            dish_img: pictureUrl ? pictureUrl : `${data.dish_img}`,
            ingredients: recipeIngredients,
          }
        );

        navigate(`/recipe/${id}`, { state: { success: dataUpdata.message } });
      } catch (error) {
        setErrorMessageForm(error.response.dataUpdata.message);
      }
    };
    putData();
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <UplodedPicture>
        {(selectedFile || preview) && (
          <img
            src={preview}
            alt="dishImage"
            width={100}
            height={100}
            onError={(e) => {
              e.target.src = `https://fooduncut.com/wp-content/uploads/2021/08/Chinese-Cooking-Hacks.jpg`;
            }}
          />
        )}
      </UplodedPicture>

      {(displayUploadImgBtn || UploadImgBtn) && (
        <UploadImageLabel htmlFor="img" className="uploadImage">
          Click to upload image
          <img src={upload} alt="load-new-avatar" width={15} height={15} />
        </UploadImageLabel>
      )}

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
        <SubmitBtn type="submit" className="btn" title="submit recipe">
          submit
          <img src={submitIcon} alt="submit" />
        </SubmitBtn>
      ) : (
        <SubmitBtn
          className="btn"
          onClick={submitUpdateHandler}
          title="update recipe"
        >
          Submit update
          <img src={submitIcon} alt="submit" />
        </SubmitBtn>
      )}
    </FormContainer>
  );
};

export default Form;
