import React from "react";
import { edit, trash } from "../../assets";
import { DivWrapper } from "./CTABtn.styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const CTABtn = ({ id }) => {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const deleteRecipe = async () => {
    if (isDeleting) {
      return;
    }
    try {
      setIsDeleting(true);
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API_URL}/recipe/${id}`
      );
      navigate("/", { state: { success: data.message } });
      setIsDeleting(false);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setIsDeleting(false);
    }
  };
  return (
    <>
      <DivWrapper>
        <Link to={`/recipe/${id}/edit`} className="btn">
          Edit
          <img
            src={edit}
            alt="edit recipe"
            title="go to edit recipe"
            width={12}
            height={11}
          />
        </Link>
        <button onClick={deleteRecipe} className="btn" title="delete recipe">
          {isDeleting ? (
            <>Deleting...</>
          ) : (
            <>
              Delete
              <img
                src={trash}
                alt="delete recipe icon"
                width={12}
                height={13}
              />
            </>
          )}
        </button>
      </DivWrapper>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};

export default CTABtn;
