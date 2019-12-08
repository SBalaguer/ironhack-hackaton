import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import SingleRecipie from "./../../Components/SingleRecipie";

export default function index() {
  const prop1 =
    "https://www.momontimeout.com/wp-content/uploads/2018/11/chicken-stir-fry-733x1103.jpg";
  const prop2 =
    "https://images.media-allrecipes.com/userphotos/560x315/34726.jpg";
  const prop3 =
    "https://images.media-allrecipes.com/userphotos/560x315/21563.jpg";
  const prop4 =
    "https://images.media-allrecipes.com/userphotos/560x315/1024884.jpg";
  const prop5 =
    "https://images.media-allrecipes.com/userphotos/560x315/1149697.jpg";
  return (
    <Carousel>
      <Carousel.Item>
        <SingleRecipie img={prop1} name="Vegan Estofado" />
      </Carousel.Item>
      <Carousel.Item>
        <SingleRecipie img={prop2} name="Golden Crescent Roll" />
      </Carousel.Item>
      <Carousel.Item>
        <SingleRecipie img={prop3} name="Poppy Seed Bread" />
      </Carousel.Item>
      <Carousel.Item>
        <SingleRecipie img={prop4} name="Apple Sauce Bread" />
      </Carousel.Item>
      <Carousel.Item>
        <SingleRecipie img={prop5} name="Apple Raisin Bread" />
      </Carousel.Item>
    </Carousel>
  );
}
