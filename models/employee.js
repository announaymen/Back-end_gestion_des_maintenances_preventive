const Pool = require("pg").Pool;
const pool = new Pool({
  user: "duqnlvru",
  host: "balarama.db.elephantsql.com",
  database: "duqnlvru",
  password: "Nr2MB7TkmKVyVJkEv68R7kp7tcGCzPHw",
  port: 5432,
});

const updateEmployee = (request, response) => {
  const id_employee = parseInt(request.params.id);
  const {
    poste,
    parc,
    nom,
    prenom,
    date_embauche,
    email,
    password,
    nss,
    chef,
  } = request.body;
  pool.query(
    "UPDATE users SET id_poste = $1, id_parc = $2, nom = $3,prenom = $4,date_embauche=$5 ,email = $6,password = $7,nss = $8,id_chef = $9, WHERE id_employee = $3 RETURNING *",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (typeof results.rows == "undefined") {
        response.status(404).send(`Resource not found`);
      } else if (Array.isArray(results.rows) && results.rows.length < 1) {
        response.status(404).send(`User not found`);
      } else {
        response
          .status(200)
          .send(`User modified with ID: ${results.rows[0].id}`);
      }
    }
  );
};
const createEmployee = (request, response) => {
  // response.status(201).send("employee created");
  const {
    poste,
    parc,
    nom,
    prenom,
    date_embauche,
    email,
    password,
    nss,
    chef,
  } = request.body;

  pool.query(
    "INSERT INTO employee ( id_poste, id_parc, nom, prenom, date_embauche, email, password, nss, id_chef) VALUES ($1, $2,$3, $4,$5, $6,$7, $8, $9) RETURNING *",
    [poste, parc, nom, prenom, date_embauche, email, password, nss, chef],
    (error, results) => {
      if (error) {
        response.status(201).send("error 1" + error);
      } else if (!Array.isArray(results.rows) || results.rows.length < 1) {
        response.status(201).send("error 2" + error);
      }
      response.status(201).send(`User added with id:${results.rows[0].id}`);
    }
  );
};
module.exports = {
  createEmployee,
};
