import styled from "styled-components";
import { Spin } from "../../animations";

export const DivWrapper = styled.div`
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const LoaderSpinner = styled.div`
  border: 5px solid black;
  border-top: 5px solid white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${Spin} 0.8s linear infinite;
`;
