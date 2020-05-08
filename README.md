"# Backend_gestion_des_maintenances_preventives"
Create, read, update, delete in a Node.js app with an Express server and Postgres database.

## Database

1. install postgresql
2. make sure that postgresql service is running
3. from pgAdmin create a Role with the name "me" and with the password "openpgpwd"
   ps: you can create it manually or use the following query

```sql
CREATE ROLE me WITH LOGIN PASSWORD 'password';
ALTER ROLE me CREATEDB;
```

create a database named "api" manually or using the following query

```sql
CREATE DATABASE api;
GRANT ALL PRIVILEGES ON DATABASE api TO me;
```

create the users table using the following query

```sql
CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);
```

insert two users as an essay

```sql
INSERT INTO users (name, email)
  VALUES ('aymen', 'ga_announ@esi.dz'), ('riyadh', 'gr_bendaho@esi.dz');
```

## Installation

```bash
git clone https://github.com/announaymen/Back-end_gestion_des_maintenances_preventive.git
cd Back-end_gestion_des_maintenances_preventive
npm install
node index.js
```

## Commands

- GET: `curl http://localhost:3000/users`
- POST: `curl --data "name=Jerry&email=jerry@example.com" http://localhost:3000/users`
- PUT: `curl -X PUT -d "name=George" -d "email=george@example.com" http://localhost:3000/users/1`
- DELETE: `curl -X "DELETE" http://localhost:3000/users/1`
