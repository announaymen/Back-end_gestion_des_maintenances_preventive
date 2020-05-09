//create connection
const Pool = require("pg").Pool;
const emp = require("./models/employee");
const pool = new Pool({
  user: "duqnlvru",
  host: "balarama.db.elephantsql.com",
  database: "duqnlvru",
  password: "Nr2MB7TkmKVyVJkEv68R7kp7tcGCzPHw",
  port: 5432,
});
//gestion des employee
const createEmployee = (request, response) => {
  emp.createEmployee(request, response, pool);
};
const updateEmployee = (request, response) => {
  emp.updateEmployee(request, response, pool);
};
const getEmployees = (request, response) => {
  emp.getEmployees(request, response, pool);
};
const getEmployeeById = (request, response) => {
  emp.getEmployeeById(request, response, pool);
};

const deleteEmployee = (request, response) => {
  emp.deleteEmployee(request, response, pool);
};
//authentification
const auth = (request, response) => {
  const { email, password } = request.body;
  pool.query(
    "SELECT * FROM employee WHERE email = $1 and password = $2",
    [email, password],
    (error, results) => {
      if (error) {
        response.status(200).send(error);
      }
      if (results.rowCount < 1) {
        response.status(200).send("authentification feild");
      } else response.status(200).send("signed in!!");
    }
  );
};
module.exports = {
  createEmployee,
  auth,
  getEmployees,
  getEmployeeById,
  deleteEmployee,
  updateEmployee,
};
