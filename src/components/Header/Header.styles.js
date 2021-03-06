import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  margin-inline: auto;
  margin-block: 0;
  max-width: 1220px;
  width: 75%;
  @media (max-width: 1180px) {
    width: 90%;
  }
`;

export const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block-start: 15px;
`;
export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  > h2 {
    font-family: "Ms Madi", cursive;
    font-size: 25px;
    font-weight: bold;
    color: black;
  }
`;
