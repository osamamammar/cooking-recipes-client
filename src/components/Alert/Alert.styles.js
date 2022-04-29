import styled, { css } from "styled-components";

export const AlertWrapper = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  background-color: #d4edda;
  border-color: #c3e6cb;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  > p {
    color: #155724;
  }

  ${(props) =>
    props.danger &&
    css`
      background-color: #f8d7da;
      border-color: #f5c6cb;
      > p {
        color: #721c24;
      }
    `}
`;
