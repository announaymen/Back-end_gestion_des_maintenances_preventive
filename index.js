const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// routes
/*app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});*/
app.get("/", function (req, res) {
  console.log("app is running !!!!!!!!!");
  res.json({ info: "Node.js, Express, and Postgres API" });
});
app.post("/employees", db.createEmployee);
app.post("/auth", db.auth);
app.get("/employees", db.getEmployees);
app.get("/employees/:id", db.getEmployeeById);
app.put("/employees/:id", db.updateEmployee);
app.delete("/employees/:id", db.deleteEmployee);
app.listen(port, () => {
  console.log(`App running on porttt ${port}.`);
});
