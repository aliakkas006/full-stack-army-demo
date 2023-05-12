const generatePerson = require('../algorithms/fake-profile-gen');

exports.fakeProfile = (req, res) => {
  try {
    const person = req.query.props;
    res.status(200).json({
      properties: person,
      personProfile: generatePerson(person),
    });
  } catch (err) {
    res.status(422).json({
      message: 'Invalid data provided!',
    });
  }
};
