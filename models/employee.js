const Pool = require("pg").Pool;
const pool = new Pool({
  user: "duqnlvru",
  host: "balarama.db.elephantsql.com",
  database: "duqnlvru",
  password: "Nr2MB7TkmKVyVJkEv68R7kp7tcGCzPHw",
  port: 5432,
});
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
  /* response
    .status(201)
    .send(
      poste +
        "\n " +
        parc +
        "\n " +
        nom +
        "\n " +
        prenom +
        "\n " +
        date_embauche +
        "\n " +
        email +
        "\n " +
        password +
        "\n " +
        nss +
        "\n " +
        chef
    );*/

  pool.query(
    "INSERT INTO employee ( id_poste, id_parc, nom, prenom, date_embauche, email, password, nss, id_chef) VALUES ($1, $2,$3, $4,$5, $6,$7, $8, $9) RETURNING *",
    [poste, parc, nom, prenom, date_embauche, email, password, nss, chef],
    (error, results) => {
      if (error) {
        response.status(201).send("error 1" + error);
      } else if (!Array.isArray(results.rows) || results.rows.length < 1) {
        response.status(201).send("error 2" + error);
      }
      response.status(201).send(`User added`);
    }
  );
};
module.exports = {
  createEmployee,
};
