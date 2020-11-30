const router = require('express').Router(),
  { postIssue } = require('../../controllers/issues');

router.post('/issues/', getRepByZipcode);

module.exports = router;
