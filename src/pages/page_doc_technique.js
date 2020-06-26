import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import downloadFile from '../file_download/dossier_complet_sprint_3.pdf'
import "../components/Audit.css"

const PageDocTech  = () => (

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

  <h4>La documentation de maintenance et d’administration developpeur/administrateur</h4>
<div className="textBusinessFoody">

<div className="optimAudit">
  <h7>La note de cadrage : </h7>
<p>Le projet Foody est un projet qui permettra un usage quotidien par les utilisateurs afin de leur permettre de trouver des recettes en fonction des ingrédients qu’ils auront décidés de cuisiner. Il était initialement prévu d’utiliser la reconnaissance visuelle pour reconnaître les ingrédients.  Après concertation, il a finalement été décidé d’utiliser la reconnaissance vocale dans un soucis de performance et de facilité d’usage. <br /><br /></p>

<h7>Les étapes majeures :  </h7>
<p>Trouver une API exploitable pour le démarrage répondant aux besoins de Foody et notamment lui permettre de récupérer des recettes lorsque l’on lui soumet une liste d’ingrédients.  Il est nécessaire qu’elle soit gratuite ou très abordable pour s’adapter aux fonds limités des initiateurs du projet. <br /><br />


Créer une interface simple et ludique. Le marché des applications liées à l’alimentation est dense mais peu d’entre elles offrent une interface épurée qui permette d’aller à l’essentiel. Il faut se démarquer en proposant quelque chose de différent pour marquer l’esprit du public. <br /><br />


Cette application n’utilisera pas les données des utilisateurs pour gagner de l’argent. Les initiateurs du projet veulent faire preuve d’éthique quant à la manière d’aborder la construction de ce projet. <br />
La projection de chiffres d’affaires se poursuivra à moyen et long terme : nous gardons à l’esprit que c’est avant tout un projet d’étude. Si après une période de beta-test les retours utilisateurs vont en ce sens, nous implémenteront des moyens éthiques de générer des revenus. <br /><br />
Plusieurs solutions ont déjà été envisagées : <br />
Format freemium avec un abonnement permettant de débloquer des options et fonctionnalités. <br /><br />

Partenariats avec des industriels qui proposeront des recettes sponsorisées valorisant leurs produits. <br /><br />

Publicités non ciblées sur l’utilisateur mais toujours dans le domaine culinaire. <br /><br />


</p>
<h7>Spécifications d’exigences fonctionnelles :</h7>
<p>•	Interface fluide et visuellement agréable <br />

•	Saisie d’ingrédients par la voix <br />

•	Trouver des recettes qui contiennent ces ingrédients. <br />
•	Pouvoir visualiser la recette complète. <br />
•	Avoir accès à un espace utilisateur comprenant les réglages de l’application, les paramètres du compte, la liste des favoris et les paramètres de notifications. <br /><br />
</p>

<h7>Outils de développement de Foody</h7>
<p>•	L’application Foody en Swift et SwiftUI a été programmée avec l’Environnement de Développement Intégré Xcode préconisé par Apple pour ses plateformes. <br />
•	Le scrapper nous servant d’API en Python a été développée en Python avec PyCharm à partir d’un fork d’un projet existant que nous avons adapté à nos besoins. <br />
•	Ce scrapper est containérisé avec Docker et déployé sur un serveur NAS de chez QNAP. <br />
•	L’identité visuelle de Foody a été élaborée avec Affinity Designer. <br />
</p>


<h7>Stockage de données : </h7>
<p>Les données sont stockées dans une base de données Firebase. Nous stockons les informations des utilisateurs nous permettant ainsi de consigner leurs recettes favorites. La partie connexion est entièrement déléguée à Google. Nous n’accédons donc à aucunes données sensibles tels que les mots de passe. Nous implémenterons bientôt d’autres protocoles de connexion. <br /><br />


L’application est compatible avec tous les iPhones sous iOS 13 minimum. Nous envisageons d’adapter l’application prochainement pour iPadOS.   <br /><br />

</p>


<h7>Les rapports d’incidents : </h7>
<p>Initialement, nous utilisions Trello pour s’inspirer de l’usage que l’on peut avoir d’un Jira. Mais lorsque l’équipe de développement s’est réduite pour diverses raisons, nous nous sommes contentés de favoriser la communication lors de nos réunions. Et c’est ainsi que nous nous attribuons les tâches. Lorsque Nora a rejoint notre équipe, le ScrumMaster a utilisé Notion (un outil inspiré de l’Agile et qui permet de gérer des petit projets) pour suivre l’évolution du projet. <br /><br />

Lors de la mise en bêta-test via la plateforme Test Flight mise à disposition par Apple, la remontée des bugs sera gérée par celle-ci et un formulaire déjà éprouvé pour cette tâche sera mis à disposition. <br /><br />

</p>
</div>


</div>
</div>
<button><a href={downloadFile} download>Télécharger le dossier complet en PDF</a></button>
<Link to="/diagram.html/">Audit de Performance et Sécurité </Link>{" "}
</div>{" "}
</div>{" "}
</Layout>
)

export default PageDocTech
