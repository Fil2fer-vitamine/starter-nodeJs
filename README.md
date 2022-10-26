# Initialisation projet

- première ligne pour créer notre fichier 'package.json'
  npm init -y y : pour yes à tout.

- deuxième ligne de commande pour init notre repository local GIT
  git init

- troisième ligne de commande pour init notre fichier '.gitignore'
  echo node_modiles >> .gitignore
  On demande à créer le fichier, s'il n'existe pas le fichier serait créeé.

  quatrième ligne de commande pour init notre fichier '.tsconfig.json'
  tsc --init

  --> génération du dossier tsconfig.json
  //"esModuleInterop": true,
  On commente la ligne 74 du dossier tsconfig.json
  Ce fichier ne nous permettrait pas d'échanger de dossiers comme on le voudrait.

  On rajoute la ligne "outDir": "./dist" à la fin.

  ## Dependances

  On ajoute la dépendance 'express'
  npm i express pour mettre en place un petit serveur d'api

  On ajoute la dépendance de développement
  npm i -D typescript @types/express ts-node nodemon

  ## Ajout de script de démarrage

  Remplacement de la ligne 7 de package json par
  "start": "nodemon src/index.ts"

  ## Ajout de notre fichier de démarrage

            import * as express from 'express';

            // Express server creation
            const app = express();
            const port = 8080;

            // First route
            app.get('/hello', (req, res) => {
            res.send({ message: 'Hello World !' });
            });

            // Bind express server on port 3004
            app.listen(port, () => {
            console.log(
                `Express server has started on port ${port}. Open http://localhost:${port}/hello to see results`
            );
            });
