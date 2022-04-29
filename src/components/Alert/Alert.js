import React, { useEffect, useState } from "react";
import { AlertWrapper } from "./Alert.styles";

const Alert = (props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);

      window.history.replaceState({}, document.title);
    }, props.delay);

    return () => {
      clearTimeout(timer);
    };
  }, [props.delay]);

  return visible ? (
    <AlertWrapper>
      <p>{props.children}</p>
    </AlertWrapper>
  ) : null;
};

export default Alert;
