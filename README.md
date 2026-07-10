# Projet-WC2026 - API REST

## Technologies
- Node.js
- Express.js
- PostgreSQL
- Sequelize

## Installation

```bash
npm install
npm start
```

## Endpoints

### Arbitres
- GET /arbitres
- GET /arbitres/:id
- POST /arbitres
- PUT /arbitres/:id
- DELETE /arbitres/:id# FIFA World Cup 2026 - API REST

API REST développée avec Node.js, Express, PostgreSQL et Sequelize pour gérer les arbitres, les matchs, les affectations et l'authentification JWT.

---

## Technologies

- Node.js
- Express.js
- PostgreSQL
- Sequelize
- JWT (jsonwebtoken)
- bcrypt
- dotenv

---

## Installation

1. Cloner le projet

```bash
git clone <url-du-projet>
```

2. Installer les dépendances

```bash
npm install
```

3. Créer un fichier `.env`

Exemple :

```env
DB_NAME=fifa_db
DB_USER=salma
DB_PASSWORD=1234
DB_HOST=localhost
DB_PORT=5432
PORT=3000
JWT_SECRET=mon_secret_jwt_2026
JWT_EXPIRES_IN=1h
```

4. Lancer le serveur

```bash
npm start
```

---

## Authentification

### POST /auth/register

Créer un utilisateur.

### POST /auth/login

Connexion.

Retourne un token JWT.

### GET /auth/me

Retourne les informations de l'utilisateur connecté.

Header :

```
Authorization: Bearer <token>
```

---

## Endpoints

### Arbitres

- GET /arbitres
- GET /arbitres/:id
- POST /arbitres
- PUT /arbitres/:id
- DELETE /arbitres/:id
- GET /arbitres/:id/matchs

### Matchs

- GET /matchs
- GET /matchs/:id
- POST /matchs
- PUT /matchs/:id
- DELETE /matchs/:id
- GET /matchs/:id/arbitres

### Affectations

- GET /affectations
- GET /affectations/:id
- POST /affectations
- PUT /affectations/:id
- DELETE /affectations/:id

---

## Sécurité

- bcrypt pour le hachage des mots de passe
- JWT pour l'authentification
- RBAC avec les rôles :
  - admin
  - commissaire
  - arbitre
  - consultation

---

## Structure

```
config/
controllers/
middlewares/
models/
routes/
server.js
```

### Matchs
- GET /matchs
- GET /matchs/:id
- POST /matchs
- PUT /matchs/:id
- DELETE /matchs/:id

### Affectations
- GET /affectations
- POST /affectations

## Diagramme UML

Le diagramme UML est disponible dans le dossier `docs/class.svg`.