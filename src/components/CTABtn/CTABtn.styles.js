import styled from "styled-components";

export const DivWrapper = styled.div`
  margin-block-start: 25px;
  margin-block-end: 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* flex-wrap: wrap; */
  gap: 10px;
  @media (max-width: 400px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  > a {
    background-color: #00000087;
  }
  > button {
    border: none;
    background-color: #910101;
  }
`;
