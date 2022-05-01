import React from "react";
import { edit, trash } from "../../assets";
import { DivWrapper } from "./CTABtn.styles";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useDelete } from "../../hooks";

const CTABtn = ({ id }) => {
  const path = "recipe-details";
  const { deleteRecipe, isDeleting, errorMessage } = useDelete({
    id,
    path,
  });
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
