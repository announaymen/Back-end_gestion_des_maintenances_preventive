"# Backend_gestion_des_maintenances_preventives"
Create, read, update, delete in a Node.js app with an Express server and Postgres database.

## Installation

```bash
git clone https://github.com/announaymen/Back-end_gestion_des_maintenances_preventive.git
cd Back-end_gestion_des_maintenances_preventive
npm install
node index.js
```

## APIs

# gestion des employees

- show you all employees

```bash
 GET: http://localhost:3000/employees
```

- show first employee

```bash
GET: http://localhost:3000/employees/1
```

- create employee

```bash
http://localhost:3000/employees  with this body
{
        "id_poste": "1",
        "id_parc": "1                   ",
        "nom": "announ",
        "prenom": "aymen",
        "date_embauche": "2016-05-31T23:00:00.000Z",
        "email": "ga_announ@esi.dz",
        "password": "openpdpwd",
        "nss": "1",
        "id_chef": null
    }
```

- Update first employee

```bash
PUT: http://localhost:3000/employees/1 with this body

{
        "id_poste": "1",
        "id_parc": "1                   ",
        "nom": "bendaho",
        "prenom": "riyadh",
        "date_embauche": "2016-05-31T23:00:00.000Z",
        "email": "ga_announ@esi.dz",
        "password": "openpdpwd",
        "nss": "1",
        "id_chef": null
    }
```

- Delete first employee

```bash
DELETE: http://localhost:3000/employees/1
```

- Authentification

```bash
POST: http://localhost:3000/auth with these body
{
    "email":"ga_announ@esi.dz",
     "password":"openpgpwd"
}
```
