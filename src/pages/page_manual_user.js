import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import CarouselManual from '../components/carouselManual';
import downloadFile from '../file_download/dossier_complet_sprint_3.pdf'

const ManualPage  = () => (

  <Layout>
  <SEO title="Manuel Utilisateur" />

  <div className="Hero3">
  <div className="HeroGroup3">
  <img
className="Logo"
src={require("../images/NouveauLogoFoodyWhite.png")}
alt="logo"
width="360"   />

  <div className="manualFoody">

  <h4>Manuel d&#39;utilisateur</h4>
  <div>
<CarouselManual/>
</div>

</div>
<button><a href={downloadFile} download>Télécharger le dossier complet en PDF</a></button>
</div>{" "}
</div>{" "}
</Layout>
)

export default ManualPage
