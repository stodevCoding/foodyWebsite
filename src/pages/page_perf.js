import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import downloadFile from '../file_download/dossier_complet_sprint_3.pdf'
import downloadCaptJmeter from '../file_download/capture_jmeter.png'
import downloadLogJmeter from '../file_download/jmeterlog.png'
import "../components/Audit.css"

const PagePerf  = () => (

  <Layout>
  <SEO title="Audit Perf et Sécurité" />

  <div className="Hero4">
  <div className="HeroGroup4">
  <img
className="Logo"
src={require("../images/NouveauLogoFoodyWhite.png")}
alt="logo"
width="360"   />

  <div className="auditFoody">

  <h4>Audit de performance et de sécurité</h4>
<div className="textBusinessFoody">

<div className="introAudit">
  <p>Nous avons décidé que l’audit se concentrera sur les requêtes réseau du scraper en python ainsi que sur le déploiement sur le serveur.  D’une part, parce que la partie connexion est gérée par Firebase et donc bénéficie des protocoles de sécurité éprouvés mis en place par Google et d’autre part, car ce service est le cœur du produit Foody.</p>
</div>



<div className="optimAudit">
  <h7>Optimisations et préconisations d’optimisations</h7>
<p>Nous avons tout d’abord testé la qualité de code et les potentielles failles de sécurité contenues dans le code et dans la façon dont a été programmé le scraper en python servant d’API qui récupère les données du site Marmiton. <br />
<br />Nous avons pour cela utilisé un outil nommé DeepSource qui analyse le code d’un repo GIT et relève les failles de sécurité, la propreté, la qualité et la performance du code. Cet outil n’a décelé aucunes failles en termes de sécurité ou de performance. Il a seulement relevé une légère anomalie sur le non-respect des normes PEP8 s’appliquant au programme en python qui a pu être corrigé immédiatement via une réparation automatique proposée par l’outil.<br /><br />
<b>Ensuite</b>, nous avons pu entamer les tests de performance et de fiabilité s’appliquant aux requêtes http qui transitent vers le service et qui à son tour, envoie des requêtes vers Marmiton afin de récupérer les recettes. Sur un test de cinquante requêtes d’affilées, le temps moyen entre la requête et la réponse varie considérablement, soit entre 100 et 25 000 ms. Lors du début du test, les premières requêtes mettent entre 100 et 200 ms puis progressivement, le délai de traitement et de réponse augmente. Le serveur physique qui héberge ce service bénéficie d’une connexion avec un débit variant de un à deux giga-octets par seconde. Nous avons conclu avec certitude que les défaillances ne viennent pas du débit mais de la puissance de calcul limitée du serveur. Effectivement, le serveur NAS en question possède un processeur Intel Celeron N3150 Quad-Cœur cadencé à 1,6 GHz. En considérant le fait que l’appareil n’est pas un serveur dédié aux services que nous analysons, il ne nous est pas possible de garantir une fiabilité et une stabilité requise pour l’usage du service destiné à Foody tant les résultats varient d’un essai à l’autre.
<br /><br />Pour résoudre cette faille de stabilité et de performance, il faudrait :<br />
  <br />•	Un serveur plus puissant qui serait dédié à ce service. Cela permettrait d’obtenir des résultats stables et d’adapter le choix matériel à l’usage prévu. C’est une solution onéreuse et non évolutive qui par conséquent ne serait pas scalable si la fréquentation d’utilisation du service augmente de façon considérable. Sachant que le budget moyen d’un serveur à usage professionnel varie plusieurs milliers à plusieurs dizaines de milliers d’euros.
<br />•	Ou encore, et c’est certainement la solution la plus viable à court terme, un hébergement du service via un prestataire. Cela offrirait la possibilité d’adapter les capacités du serveur loué en fonction des besoins évolutif du projet afin d’avoir et proposer un service fiable, stable et sans parasites tiers.
</p>
</div>

<div className="securiteAudit">
  <h7>Failles de sécurité potentielles</h7>
<p>Nous avons ensuite analysé la sécurité des requêtes réseau. Le serveur qui héberge actuellement le service bénéficie d’une protection par certificat SSL non certifié. Cela protège principalement le serveur mais pas les communications qui transitent vers celui-ci. Les requêtes sont donc nues et sans cryptage. Il a été établi que les requêtes qui ne sont pas protégées ne contiennent pas de données utilisateurs sensibles. Le risque se situe donc ailleurs. L’adresse du service étant exposé, il pourrait alors devenir la cible d’une attaque par surcharge, ce qui provoquerait le crash du service ou l’arrêt du serveur hébergeant ce dît service. <br /><br />

Pour corriger cette vulnérabilité, il est donc recommandé à Foody d’investir dans un certificat SSL certifié permettant de protéger et de crypter les requêtes passées vers le service afin de protéger les communications, de prévenir une attaque par surcharge du service et de préserver la machine. <br /><br />

Comme le service est containérisé dans un container Docker, il est possible de brider la puissance de calcul dédiée au container du service en question afin d’éviter la surcharge du serveur mais cela ne réglerait en aucune façon la faille de sécurité des communications non protégées.
</p>
</div>

</div>
<div className="listButton">
  <button id="btn1"><a href={downloadFile} download>Télécharger le dossier texte en PDF</a></button>
</div>
<div className="listButton"><button id="btn2"><a href={downloadCaptJmeter} download>Aperçu JMeter serveur disponible</a></button></div>
<div className="listButton"><button id="btn3"><a href= {downloadLogJmeter}>Log JMeter serveur surchargé</a></button></div>
</div>

</div>{" "}
</div>{" "}
</Layout>
)

export default PagePerf
