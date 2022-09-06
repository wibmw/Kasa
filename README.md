![Kasa](./src/assets/logoKasa.jpg) 

## Contexte
> Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end. 

## Objectifs
Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les [maquettes Figma](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design?node-id=4%3A1) et responsives ! 

### Contraintes fonctionnelles :

Quelques précisions sur les fonctionnalités du site :
- **Pour le défilement des photos dans la galerie (composant Gallery) :**
○ Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image. 
○ Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "image suivante", la galerie affiche la première image. 
○ S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" n'apparaissent pas.
○ La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
- **Collapse : Par défaut, les Collapse sont fermés à l'initialisation de la page.**
- **Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer :**
○ Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Notes
###Maquette :

[Maquette Figma](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design?node-id=4%3A1)

###Polices :
- __Logo & titres:__ *Montserrat*
- __Texte:__ *Montserrat*

###Couleurs :
***Primaire :***
-  🟥 __*#FF6060*__
  
***Secondaire :***
-  ⬜️ __*#F6F6F6*__
-  ⬛ __*#C4C4C4*__

 **Linter & Formatter:**     
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) 
![ESLint](https://img.shields.io/badge/-Prettier-blue) 
## Scripts disponibles

Dans le dossier du projet, exéctuer:

### `yarn start`
Pour lancer l'application ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

### `yarn build`
Construit l'application dans le dossier `build`.
Il créé une application React en mode production et optimise l'application pour de meilleurs performances.

### `yarn deploy`
Construit l'application dans le dossier `build` et publie l'application sur [GitHub pages](https://wibmw.github.io/Kasa/).

