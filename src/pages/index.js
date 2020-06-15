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
  <svg width="100%" height="172" fill="none" viewBox="0 0 100% 172">
  <path fill="white">
  <animate
repeatCount="indefinite"
fill="freeze"
attributeName="d"
dur="30s"
values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;"
  />
  </path>{" "}
  </svg>
  </div>{" "}
  </div>{" "}
  </Layout>
);

export default IndexPage;
