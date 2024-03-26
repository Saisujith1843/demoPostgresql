const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Sujith_1843",
  database: "demoBackend",
});
module.exports = sequelize;
