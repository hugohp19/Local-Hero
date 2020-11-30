const router = require('express').Router(),
  { getRepByZipcode } = require('../../controllers/representatives');

router.get('/representatives/', getRepByZipcode);

module.exports = router;
