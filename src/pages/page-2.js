import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";

const SecondPage  = () => (

  <Layout>
    <SEO title="Modèle économique" />

  <div className="Hero2">
  <div className="HeroGroup2">
  <img
className="Logo"
src={require("../images/NouveauLogoFoodyWhite.svg")}
alt="logo"
width="360"   />

  <div className="businessFoody">
    <div className="textBusinessFoody">
<h4>Comment Foody envisage de générer son chiffre d’affaire?</h4>

  <h7>Trois axes sont envisagés sur différentes échelles de temps:</h7>

  <p><b>Premièrement</b>, nous allons implémenter de la publicité pour générer des revenus stables en corrélation avec l’alimentation.</p>

<p><b>Deuxièmement</b>, un système d’abonnement sera mis en place pour  supprimer la publicité et débloquer différentes options réservées au membre dit  «PREMIUM»  comme la  liste de favoris, et d’autres futurs développements comme l’établissement d’une liste de courses avec les ingrédients des recettes sélectionnées etc.</p>

<p><b>Et dernier point</b> sur le plus long terme,  nous allons avec nos futurs partenaires  acquis, créer des recettes sponsorisées mettant en avant leurs produits ou ingrédients.</p>
    </div>
  </div>



  </div>{" "}
  </div>{" "}
  </Layout>
)

export default SecondPage