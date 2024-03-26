const User = require("../models/user");
//create
async function create(req, res) {
  try {
    const newUser = await User.create(req.body);
    res.status(202).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in creation" });
  }
}
//fetching all data
async function fetchAll(req, res) {
  try {
    const allUserData = await User.findAll();
    res.json(allUserData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error in fetching all data" });
  }
}
//fetch by Id
async function fetchById(req, res) {
  console.log(req.params);
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error in fetching by id" });
  }
}
//updating by id
async function updateById(req, res) {
  try {
    const {id} = req.params;
    const updates = req.body;
    const [updateCount] = await User.update(updates, { where: {id} });
    if (updateCount === 0) {
      res.status(404).json({ message: "user not found" });
    }
    res.json({ message: "user update successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error in updating" });
  }
}
//delete by id
async function deleteById(req, res) {
  try {
    const {id} = req.params;
    const deleteCount = await User.destroy({ where: {id} });
    if (deleteCount === 0) {
      res.status(404).json({ message: "user not found" });
    }
    res.json({ message: "deleted succesfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error in deleting" });
  }
}
module.exports = { create, fetchAll, fetchById, updateById, deleteById };
