let sql = require("mysql");

let createConnection = sql.createConnection({
  host: "localhost",
  user: "iboy",
  password: "1234",
});

createConnection.connect((err) => {
  if (err) throw err;
  console.log("Connected");
  createConnection.query("CREATE DATABASE JavaPoint", (err, result) => {
    if (err) throw err;
    console.log("Database Created!");
  });
});
