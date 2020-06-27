import React, { useEffect, useState } from "react";
import CarouselFoody from '../components/carouselFoody';
import Layout from "../components/layout";
import SEO from "../components/seo";



  const IndexPage = () => {
    const [windowExist, setWindowExist] = useState(false);
    useEffect(() => {
      if (typeof window !== "undefined") {
        setWindowExist(true);
      }
    }, []);
    return (
      <>
      {windowExist ? (
    <Layout>
    <SEO title="Home" />
    <div className="Hero">
    <div className="HeroGroup">
    <img
  className="Logo"
  src={require("../images/NouveauLogoFoodyWhite.png")}
  alt="logo foody"
  width="360"   />

    <div className="pitchFoody">
    <CarouselFoody/>
    </div>
    <div className="ContainerLogos">
    <h7> Foody est développé avec </h7>{" "}
  <div className="Logos">
    <div className="logoBox">
    <img id="affinitydesigner" className="image" src={require("../images/logo-affinity-designer.svg")} alt="Affinity Designer" width="50" />
      <div class="middle">
      <div class="text">Affinity Designer</div>
    </div>
    </div>
    <div className="logoBox">
    <img id="swiftui" className="image" src={require("../images/logo-swiftui.svg")} alt="Swift UI" width="50" /><div class="middle">
      <div class="text">Swift UI</div>
    </div>
    </div>
    <div className="logoBox">
    <img id="swift" className="image" src={require("../images/logo-swift.png")}  alt="Swift" width="50" />
      <div class="middle">
      <div class="text">Swift</div>
    </div>
    </div>
    <div className="logoBox">
    <img id="react" className="image" src={require("../images/logo-react.png")} alt="ReactJS" width="50" />
      <div class="middle">
      <div class="text">ReactJS</div>
    </div>
    </div>
    <div className="logoBox">
    <img id="docker" className="image"src={require("../images/logo-docker.svg")} alt="Docker" width="50" />
      <div class="middle">
      <div class="text">Docker</div>
    </div>
    </div>
    <div className="logoBox">
    <img id="python" className="image" src={require("../images/logo-python.svg")} alt="Python" width="50" />
      <div class="middle">
      <div class="text">Python</div>
    </div>
    </div>
    </div>{" "}
    </div>{" "}
    <div className="soonStore">
    <img src={require("../images/tileSoonAppStore.svg")} alt="Bientot sur l'App Store" width="250" />
    </div>{" "}

    </div>{" "}
    </div>{" "}
    </Layout>) : (
  <></>
)}
;
</>
);
};
export default IndexPage;
