import React from "react";
import { Container, CarouselInner } from "./style";

import img1 from "../img/img01.png";
import img2 from "../img/img02.png";
import img3 from "../img/img03.png";

function Carousel() {
  return (
    <Container>
      <CarouselInner>
        <img src={img1} classname="sliderimg" />
        <img src={img2} classname="sliderimg" />
        <img src={img3} classname="sliderimg" />
      </CarouselInner>
    </Container>
  );
}

export default Carousel;
