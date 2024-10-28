const express = require("express");
const app = express();

const prisma = require("./db/prisma");
const UserService = require("./userService");
const UserController = require("./userController");
const userSerivce = new UserService(prisma);
const userController = new UserController(userSerivce);

app.get("/", (req, res) => {
  return userController.getUsers(req, res);
});

app.get("/:userId", (req, res) => {
  return userController.getUserById(req, res);
});

app.listen(3000, () => {});
