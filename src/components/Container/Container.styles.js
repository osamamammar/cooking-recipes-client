import styled from "styled-components";

export const MainContainer = styled.main`
  position: relative;
  margin-block: 0;
  margin-inline: auto;
  max-width: 1220px;
  width: 65%;
  flex: 1;

  @media (max-width: 1180px) {
    width: 80%;
  }
`;
export const MainWrapper = styled(MainContainer)`
  margin-block: unset;
  margin-block-start: ${({ marginBlockStart }) =>
    marginBlockStart ? marginBlockStart : "100px"};
  @media (max-width: 466px) {
    width: ${({ width }) => width && width};
  }
`;
