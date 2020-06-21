import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
  <SEO title="Home" />
  <div className="Hero">
  <div className="HeroGroup">
  <img
className="Logo"
src={require("../images/NouveauLogoFoodyWhite.svg")}
alt="logo"
width="410"
  />
<div className="pitchFoody">
    <p> Votre prochain compagnon culinaire,</p>{" "}
  <p> Qui vous obéit au doigt et la voix,</p>{" "}
  <p>{"pour vous inspirer à l'élaboration des repas"}</p>
</div>

<div className="mockUpFoody">

  </div>

<div>
<Link to="/page-2/">page 2 </Link>{" "}
</div>{" "}
<div className="ContainerLogos">
  <h5> Foody is built with </h5>{" "}
<div className="Logos">
  <img src={require("../images/logo-affinity-designer.svg")} width="50" />
  <img src={require("../images/logo-swiftui.svg")} width="50" />
  <img src={require("../images/logo-swift.png")} width="50" />
  <img src={require("../images/logo-react.png")} width="50" />
  <img src={require("../images/logo-docker.svg")} width="50" />
  <img src={require("../images/logo-python.svg")} width="50" />
  </div>{" "}
  </div>{" "}
  <div className="soonStore">
  <img src={require("../images/tileSoonAppStore.svg")} width="250" />
  </div>{" "}
  
  </div>{" "}
  </div>{" "}
  </Layout>
);

export default IndexPage;
