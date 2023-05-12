const countChars = require('../algorithms/count-chars');

exports.countCharsController = (req, res) => {
  try {
    const str = req.query.str;

    res.status(200).json({
      string: str,
      countChars: countChars(str),
    });
  } catch (err) {
    res.status(422).json({
      message: 'Invalid data provided!',
    });
  }
};
