import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "../components/CarouselFoody.css";
import img1 from "../images/sliderFoody/SliderFoody1.png";
import img2 from "../images/sliderFoody/SliderFoody2.png";
import img3 from "../images/sliderFoody/SliderFoody3.png";
import img4 from "../images/sliderFoody/SliderFoody4.png";
import img5 from "../images/sliderFoody/SliderFoody5.png";
import img6 from "../images/sliderFoody/SliderFoody6.png";
import img7 from "../images/sliderFoody/SliderFoody7.png";
import img8 from "../images/sliderFoody/SliderFoody8.png";
const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};
const CarouselFoody = () => {
  const [windowExist, setWindowExist] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowExist(true);
    }
  }, []);
  return (
    <>
    {windowExist ? (
        <div className="containerSlide">
        <Slide {...proprietes}>
<div className="each-slide">
    <div>
    <img src={img1} alt="img1" />
    </div>
    </div>
    <div className="each-slide">
    <div>
    <img src={img2} alt="img2" />
    </div>
    </div>
    <div className="each-slide">
    <div>
    <img src={img3} alt="img3" />
    </div>
    </div>
    <div className="each-slide">
    <div>
    <img src={img4} alt="img1" />
    </div>
    </div>
    <div className="each-slide">
    <div>
    <img src={img5} alt="img2" />
    </div>
    </div>
    <div className="each-slide">
    <div>
    <img src={img6} alt="img3" />
    </div>
    </div>
    <div className="each-slide">
    <div>
    <img src={img7} alt="img1" />
    </div>
    </div>
    <div className="each-slide">
    <div>
    <img src={img8} alt="img2" />
    </div>
    </div>
    </Slide>
    </div>
) : (
  <></>
)}

</>
);
};
export default CarouselFoody;