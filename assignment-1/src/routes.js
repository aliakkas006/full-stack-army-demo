const router = require('express').Router();

const {
  randomGenController,
} = require('../src/controller/random-gen-controller');

const { fakeProfile } = require('../src/controller/fake-profile-controller');

router.get('/api/v1/random-num-gen', randomGenController);

router.get('/api/v1/fake-profile-gen', fakeProfile);

module.exports = router;
