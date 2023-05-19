import user from './service/user.js';

user.createUser('ali', 'ali@gmail.com', 12345);
user.createUser('akkas', 'akkas@gmail.com', 988645);
user.createUser('arif', 'arif@gmail.com', 96705);
// console.log('Users -> ', user.users);

const expectedUser = user.findUserByEmail('arif@gmail.com');
// console.log(expectedUser);

const allUsers = user.findUsers()
// console.log(allUsers);