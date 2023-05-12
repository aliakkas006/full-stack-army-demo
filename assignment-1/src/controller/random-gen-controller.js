const generateRandom = require('../algorithms/random-num-gen')

exports.randomGenController = (req, res) => {
    try {
      const startValue = parseInt(req.query.start);
      const endValue = parseInt(req.query.end);
      
      res.status(200).json({
        start: startValue,
        end: endValue,
        randomNum: generateRandom(startValue, endValue),
      });
    } catch(err) {
      res.status(422).json({
        message: 'Invalid data provided!',
        min: req.query.min,
        max: req.query.max,
      });
    }
  }