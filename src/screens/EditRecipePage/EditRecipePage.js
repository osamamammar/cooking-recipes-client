import React from "react";
import { ErrorMessage, Form, Loader, MainWrapper } from "../../components";
import { useAxiosFetch, useOverflow } from "../../hooks";
import { useParams } from "react-router-dom";

const EditRecipePage = () => {
  useOverflow();
  let { id } = useParams();

  const { data, loading, error } = useAxiosFetch(
    `${process.env.REACT_APP_API_URL}/recipe/${id}`,
    "GET"
  );
  return (
    <MainWrapper marginBlockStart="40px" width="95%">
      <h2>Edit Recipe Page</h2>
      {data && !error && !loading ? (
        <Form btnTitle={"Submit update"} data={data} id={id}></Form>
      ) : loading ? (
        <Loader></Loader>
      ) : (
        error && <ErrorMessage>{error}</ErrorMessage>
      )}
    </MainWrapper>
  );
};

export default EditRecipePage;
