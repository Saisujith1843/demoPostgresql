const sequelize = require("./src/db");
const User = require("./src/models/user");
const express = require("express");
const userRoute = require("./src/routers/userRouter");

const app = express();
app.use(express.json());

app.use("/users", userRoute);

app.listen(4000)