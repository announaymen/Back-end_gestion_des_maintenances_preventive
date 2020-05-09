const Pool = require("pg").Pool;
const pool = new Pool({
  user: "duqnlvru",
  host: "balarama.db.elephantsql.com",
  database: "duqnlvru",
  password: "Nr2MB7TkmKVyVJkEv68R7kp7tcGCzPHw",
  port: 5432,
});
const getUsers = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getUserById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send("hheheheh");
    //response.status(200).json(results.rows);
  });
};
const auth = (request, response) => {
  const { name, email } = request.body;
  pool.query(
    "SELECT * FROM users WHERE name = $1 and email = $2",
    [name, email],

    (error, results) => {
      if (error) {
        throw error;
      }
      if (results.rowCount < 1) {
        response.status(200).send("authentification feild");
      } else response.status(200).send("signed in!!");
      //response.status(200).json(results.rows);
    }
  );
};

const createUser = (request, response) => {
  const { name, email } = request.body;
  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      } else if (!Array.isArray(results.rows) || results.rows.length < 1) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};
const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;
  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
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
const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  auth,
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
