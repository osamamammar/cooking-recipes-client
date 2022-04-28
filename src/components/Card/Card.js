import React from "react";
import {
  CardDescription,
  CardTitle,
  DishImage,
  DivWrapper,
  Recipe,
  StyledLink,
} from "./Card.styles";

const Card = () => {
  return (
    <Recipe>
      <StyledLink to={"/"}>
        <DishImage
          src="https://www.bbcgoodfoodme.com/wp-content/uploads/2022/04/Myrra-Food-photography33079-768x512.jpg"
          alt="dish image"
          width={300}
          height={200}
          loading="lazy"
          title="dish image"
        />
        <DivWrapper>
          <CardTitle>Lorem ipsum dolor</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            nisi doloribus veniam deserunt dolore quidem enim, molestias
            reprehenderit. Sapiente, earum laudantium! Ex ipsam sint earum quia
            ea ut eveniet odit?
          </CardDescription>
        </DivWrapper>
      </StyledLink>
    </Recipe>
  );
};

export default Card;
