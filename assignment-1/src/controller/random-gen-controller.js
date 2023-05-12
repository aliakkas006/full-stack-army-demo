const generateRandom = require('../algorithms/random-num-gen')

exports.randomGenController = (req, res) => {
    try {
      const startValue = parseInt(req.query.start);
      const endValue = parseInt(req.query.end);
      
      res.json({
        start: startValue,
        end: endValue,
        randomNum: generateRandom(startValue, endValue),
      });
    } catch {
      res.status(422).json({
        message: 'Invalid data provided!',
        min: req.query.min,
        max: req.query.max,
      });
    }
  }