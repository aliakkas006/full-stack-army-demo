const router = require('express').Router();

const {
  randomGenController,
} = require('../src/controller/random-gen-controller');

router.get('/api/v1/random-num-gen', randomGenController);

module.exports = router;
