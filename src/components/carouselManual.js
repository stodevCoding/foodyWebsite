import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "../components/CarouselManual.css";

import img1 from "../images/slidemanual/log.png";
import img2 from "../images/slidemanual/home.png";
import img3 from "../images/slidemanual/home2.png";
import img4 from "../images/slidemanual/mic1.png";
import img5 from "../images/slidemanual/mic2.png";
import img6 from "../images/slidemanual/mic3.png";
import img7 from "../images/slidemanual/carouselrecette.png";
import img8 from "../images/slidemanual/recettesingle.png";
import img9 from "../images/slidemanual/settings.png";

const proprietes = {
  duration: 10000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};
const CarouselManual = () => {
  const [windowExist, setWindowExist] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowExist(true);
    }
  }, []);
  return (
    <>
    {windowExist ? (
        <div className="containerSlideManual">
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
    <div className="each-slide">
    <div>
    <img src={img9} alt="img2" />
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
export default CarouselManual;