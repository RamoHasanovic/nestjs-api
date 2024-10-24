class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  getUsers(req, res) {
    res.json(this.userService.getUsers());
  }

  getUserById(req, res) {
    res.json(this.userService.getUserById(req.params.userId));
  }
}

module.exports = UserController;
