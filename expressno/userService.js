class UserService {
  constructor(prisma) {
    this.prisma = prisma;
  }

  getUsers() {
    return this.prisma.users.getUsers();
  }

  getUserById(id) {
    return this.prisma.users.getUserById(id);
  }
}

module.exports = UserService;
