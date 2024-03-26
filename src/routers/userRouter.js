const express = require("express");
const userController = require("../controllers/userController");

const userRouter = express.Router();

//create
userRouter.post("/", userController.create);
//fetching all data
userRouter.get("/", userController.fetchAll);
//fetch by id
userRouter.get("/:id", userController.fetchById);
//update by id
userRouter.put("/:id",userController.updateById);
//delete by id
userRouter.delete("/:id",userController.deleteById);

module.exports = userRouter