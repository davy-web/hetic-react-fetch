# Hetic - Blog OnePage React Fetch

## Projet utilise
- PHP 7.4
- Composer
- Symfony
- React
- Docker
- Docker-compose

## Groupe
- Davy CHEN

## Pour démarrer le site (Terminal)
````shell

docker-compose up -d

cd app
symfony serve -d

cd ../views
npm install
npm run start

````

## Pour arrêter le site (Terminal)
````shell

symfony serve:stop

````

## URL du site local
- http://localhost:3000/


## Commandes utilisé
- symfony new app
- npx create-react-app views

## Autre manière de faire pour créer react
- npm init -y
- npm install react react-dom
- npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
- npm install --save-dev webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader file-loader babel-loader