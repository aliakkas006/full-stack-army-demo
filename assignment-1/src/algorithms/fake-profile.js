const { faker } = require('@faker-js/faker');

const generatePerson = (selectedProps) => {
  const props = new Set([
    'firstName',
    'lastName',
    'email',
    'avatar',
    'age',
    'address',
  ]);

  const person = {};

  selectedProps.forEach((property) => {
    if (props.has(property)) {
      switch (property) {
        case 'firstName':
          person.firstName = faker.person.firstName();
          break;
        case 'lastName':
          person.lastName = faker.person.lastName();
          break;
        case 'email':
          person.email = faker.internet.email();
          break;
        case 'avatar':
          person.avatar = faker.image.avatar();
          break;
        case 'age':
          person.age = faker.datatype.number({ min: 15, max: 80 });
          break;
        case 'address':
          person.address = faker.location.city();
          break;

        default:
          break;
      }
    }
  });

  return person;
};

module.exports = generatePerson;
