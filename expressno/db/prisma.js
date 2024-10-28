const dbUsers = require("../db/users");

const users = {
  getUsers: () => dbUsers,
  getUserById: (id) => dbUsers.find((user) => user.id == id),
};

module.exports = {
  users,
};
