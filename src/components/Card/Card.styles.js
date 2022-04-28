import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;

  @media (max-width: 1105px) {
    position: relative;
    flex-direction: column;
    justify-content: center;
  }
`;

export const DishImage = styled.img`
  @media (max-width: 1105px) {
    width: 100%;
    max-height: 220px;
    object-fit: cover;
    @media (max-width: 1105px) {
      opacity: 0.2;
      filter: blur(1.5px);
      transition: all 0.3s ease-in-out;
      &:hover {
        filter: none;
      }
    }
  }
`;

export const Recipe = styled.li`
  width: 100%;
  background-color: var(--color-secondary);
  border-radius: 10px;
  margin-block-end: 20px;

  box-shadow: 0 4px 8px 0 var(--box-shadow);
  transition: 0.3s;

  /* remove flikering on text */
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  transform-style: preserve-3d;
  backface-visibility: hidden;

  &:hover {
    box-shadow: 0 8px 16px 0 var(--box-shadow);
    transform: scale(1.02);
  }
`;

export const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  color: var(--color-primary);
  gap: 10px;

  @media (max-width: 1105px) {
    z-index: 100;
    position: absolute;
    inset-inline-start: 0;
    inset-block-end: 12px;
    padding-inline: 10px;
    pointer-events: none;

    /* TEXT-TRUNCATION */
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow-wrap: normal;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  font-weight: 100;
`;
