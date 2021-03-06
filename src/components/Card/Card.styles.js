import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;

  > button.delete-btn {
    position: absolute;
    inset-block-start: 15px;
    inset-inline-end: 15px;
    z-index: 999;
    border: none;
    cursor: pointer;
    background-color: transparent;
    display: none;
  }
  &:hover {
    > button.delete-btn {
      display: block;
    }
  }
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
        opacity: 0.6;
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
  margin-block: 20px;
  margin-inline: 10px;

  /* TEXT-TRUNCATION */
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;

  @media (max-width: 1105px) {
    z-index: 100;
    position: absolute;
    inset-inline-start: 0;
    inset-block-end: 12px;
    padding-inline: 10px;
    pointer-events: none;
  }
  @media (max-width: 428px) {
    -webkit-line-clamp: 3;
  }
`;

export const CardTitle = styled.h4`
  font-size: 20px;
  font-weight: bold;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  font-weight: 100;
`;
