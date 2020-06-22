import React, { useEffect, useState } from "react";
import CarouselFoody from '../components/carouselFoody';
import Layout from "../components/layout";
import SEO from "../components/seo";



  const IndexPage = () => {
    const [windowExist, setWindowExist] = useState(false);
    useEffect(() => {
      if (typeof window !== "undefined") {
        setWindowExist(true);npm
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
  src={require("../images/NouveauLogoFoodyWhite.svg")}
  alt="logo foody"
  width="360"   />

    <div className="pitchFoody">
    <CarouselFoody/>
    </div>
    <div className="ContainerLogos">
    <h7> Foody est développé avec </h7>{" "}
  <div className="Logos">
    <div className="logoBox">
    <img id="affinitydesigner" src={require("../images/logo-affinity-designer.svg")} alt="logo affinity designer" width="50" />
    </div>
    <div className="logoBox">
    <img id="swiftui" src={require("../images/logo-swiftui.svg")} alt="logo swift u i" width="50" />
    </div>
    <div className="logoBox">
    <img id="swift" src={require("../images/logo-swift.png")}  alt="logo swift" width="50" />
    </div>
    <div className="logoBox">
    <img id="react" src={require("../images/logo-react.png")} alt="logo react" width="50" />
    </div>
    <div className="logoBox">
    <img id="docker" src={require("../images/logo-docker.svg")} alt="logo docker" width="50" />
    </div>
    <div className="logoBox">
    <img id="python" src={require("../images/logo-python.svg")} alt="logo python" width="50" />
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
