import React from "react";
import { ErrorContainer } from "./ErrorMessage.styles";

const ErrorMessage = ({ children, marginBlockStart }) => {
  return (
    <ErrorContainer marginBlockStart={marginBlockStart}>
      <p>{children}</p>
    </ErrorContainer>
  );
};

export default ErrorMessage;
