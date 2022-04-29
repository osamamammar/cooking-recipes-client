import React from "react";
import { ErrorContainer } from "./ErrorMessage.styles";

const ErrorMessage = ({ children }) => {
  return (
    <ErrorContainer>
      <p>{children}</p>
    </ErrorContainer>
  );
};

export default ErrorMessage;
