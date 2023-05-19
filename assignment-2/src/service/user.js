import shortid from 'shortid';

class User {
  constructor() {
    this.users = [];
  }

  // create a new user
  createUser(name, email, password) {
    const user = {
      id: shortid.generate(),
      name,
      email,
      password,
    };
    this.users.push(user);
  }

  // find all users
  findUsers() {
    return this.users
  }

  // find user by email
  findUserByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  // find user by id
  findUserById(id) {
    return this.users.find((user) => user.id === id);
  }
}

const users = new User();

export default users;
