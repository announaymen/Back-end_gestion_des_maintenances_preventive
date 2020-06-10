/*INSERT INTO public.piece(
	id_fournisseur, reference, duree_vie, fabriqueur, prix, nb_ex_dispo)
	VALUES ( 1 , '1', 5456, 'fab1', 542, 20);
*/
const updatePiece = (request, response, pool) => {
  const id_piece = parseInt(request.params.id);
  const {
    id_fournisseur,
    reference,
    duree_vie,
    fabriqueur,
    prix,
    nb_ex_dispo,
  } = request.body;
  pool.query(
    "UPDATE piece SET id_fournisseur = $1, reference = $2, duree_vie = $3,fabriqueur = $4,prix=$5 ,nb_ex_dispo = $6 WHERE id_piece = $7 RETURNING *",
    [
      id_fournisseur,
      reference,
      duree_vie,
      fabriqueur,
      prix,
      nb_ex_dispo,
      id_piece,
    ],
    (error, results) => {
      if (error) {
        response.status(404).send("error 1 " + error);
      }
      if (typeof results.rows == "undefined") {
        response.status(404).send(`Resource not found`);
      } else if (Array.isArray(results.rows) && results.rows.length < 1) {
        response.status(404).send(`User not found`);
      } else {
        response
          .status(200)
          .send(`piece modified with ID: ${results.rows[0].id}`);
      }
    }
  );
};
const createEmployee = (request, response, pool) => {
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
const getPieces = (request, response, pool) => {
  pool.query("SELECT * FROM piece ORDER BY id_piece ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getEmployeeById = (request, response, pool) => {
  const id = parseInt(request.params.id);
  pool.query(
    "SELECT * FROM employee WHERE id_employee = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const deleteEmployee = (request, response, pool) => {
  const id = parseInt(request.params.id);
  pool.query(
    "DELETE FROM employee WHERE id_employee = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User deleted with ID: ${id}`);
    }
  );
};

module.exports = {
  getPieces,
  //createEmployee,
  updatePiece,
  // getEmployeeById,
  //deleteEmployee,
};
