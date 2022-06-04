import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useDelete = ({ id, path }) => {
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
      if (path === "recipe-details") {
        navigate("/", { state: { success: data.message } });
      } else if (path === "landingpage") {
        navigate("/", { state: { success: data.message } });
        window.location.reload();
      }
      setIsDeleting(false);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setIsDeleting(false);
    }
  };
  return { deleteRecipe, isDeleting, errorMessage };
};

export default useDelete;
