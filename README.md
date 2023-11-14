# Insiders - Test technique

Ce projet fait office de test technique pour Insiders. Le but étant de créer une interface afin d'afficher des données d'une course dans les rues de Lausanne. Ces données sont générées et accessibles via un websocket, le tout dans un container docker.

## Le projet

Pour ce projet et dans le but de me rapprocher au plus possible de la stack technologique de l'entreprise, j'ai décidé d'utiliser React et Typescript pour mettre en place cette interface. J'ai aussi décidé d'utiliser les librairies MUI et Recharts afin de mettre en place certains composants car j'ai déjà travaillé avec elles.

Ma première idée consistait à faire deux pages, une page de vision globale et une page de détails concernant un athlète. Après un bref moment, j'ai préféré créer une page unique contenant deux sections distinctes. Ceci permet de voir le déroulement global de la course tout en ayant sous les yeux les détails de l'athlète souhaité. J'ai utilisé la librairie React-Leaflet qui semblait être un bon choix pour l'affichage de la carte et des marqueurs.

Concernant le contenu de ces deux sections, je suis resté dans une idée assez basique mais qui, il me semble, donne à l'utilisateur toutes les informations dont il a besoin. La section de vision globale est faite de deux composants; une carte sur laquelle les différents coureurs sont affichés ainsi qu'un tableau représentant le classement. La deuxième section est dédiée à la vision approfondie des données d'un athlète. L'athlète souhaité peut être sélectionné au moyen du sélecteur dans le header de la section. Le reste de cette dernière est ensuite composée d'un graph représentant l'évolution de la vitesse de l'athlète puis d'un tableau dans lequel sont affichées ses statistiques globales; meilleur classement, pire classement, vitesse la plus haute et vitesse la plus basse.

## Le futur

Ce projet n'étant pas terminé, j'ai déjà en tête la suite que j'aimerai lui donner.

Premièrement, je souhaitais donner un tableau de commande à l'utilisateur, probablement dans le header de la page, afin de lui permettre de jouer avec les données entrantes. C'est-à-dire pouvoir gérer le nombre de coureurs, la vitesse de la simulation, le temps de départ ainsi qu'un système de Start&Stop.

Deuxièmement, le côté visuel de certains composants est encore à améliorer. Par exemple, les marqueurs sur la carte ainsi que les labels indiquant quel coureur est représenté ne correspondent pas à mes attentes. Le choix des polices, l'espacement ainsi que le dimensionnement restent aussi à retravailler. De plus, il serait positif de donner du feedback à l'utilisateur lors du changement d'athlète sélectionné. Le rafraîchissement du graph n'étant pas instantané, cela peut créer une incompréhension sur le comportement de l'application. J'aurais donc souhaité ajouter une icône de chargement le temps que les données soient prêtes.

Dernièrement, le côté responsif de l'application n'est pas encore au top. Comme j'ai utilisé, dans le but de mettre rapidement en place le projet, des hauteurs relatives à la taille de l'écran, il existe certains cas où l'affichage est inutilisable comme dans le cas d'un téléphone en mode paysage.

## Mes difficultés

Le projet m'a permis de découvrir certaines technologies mais aussi certaines difficultés. N'ayant jamais travaillé avec TypeScript, j'ai perdu un certain temps à me battre avec le typage de l'application. Il en va de même pour les WebSockets. Le fait de recevoir toutes les données en un seul bloc m'a fait me poser beaucoup de questions sur la gestion des données dans le frontend.

## Tester le projet

Afin de tester le projet, il est nécessaire d'avoir le container docker responsable du backend.

Pour installer le projet et télécharger les dépendances, il faut exécuter la commande `nmp intall` puis `npm start` permet de lancer l'application qui est disponible à l'adresse `http://localhost:3000`. 



