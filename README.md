"# Backend_gestion_des_maintenances_preventives"
Create, read, update, delete in a Node.js app with an Express server and Postgres database.

# **Installation**

```bash
git clone https://github.com/announaymen/Back-end_gestion_des_maintenances_preventive.git
cd Back-end_gestion_des_maintenances_preventive
npm install
node index.js
```

# <u>APIs</u>

## <I> Gestion des employees</I>

- **_Show you all employees_**

```bash
 GET: https://gestion-maintenaces.herokuapp.com/employees
```

- **_Show first employee_**

```bash
GET: https://gestion-maintenaces.herokuapp.com/employees/1
```

- **_Create employee_**

```bash
https://gestion-maintenaces.herokuapp.com/employees  with this body
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

- **_Update first employee_**

```bash
PUT: https://gestion-maintenaces.herokuapp.com/1 with this body

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

- **_Delete first employee_**

```bash
DELETE: https://gestion-maintenaces.herokuapp.com/employees/1
```

- **_Authentification_**

```bash
POST: https://gestion-maintenaces.herokuapp.com/auth with these body
{
    "email":"ga_announ@esi.dz",
     "password":"openpgpwd"
}
```
