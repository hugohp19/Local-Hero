const router = require('express').Router(),
  {
    createUser,
    loginUser,
    requestPasswordReset,
    passwordRedirect
  } = require('../../controllers/users');

router.get('/api/', (request, response) => {
  response.json({
    message: 'home'
  });
});
router.post('/api/login', (request, response) => {
  response.json({
    message: 'login'
  });
});
router.post('/api/signup', createUser);

// router.get('/password', requestPasswordReset);
// router.get('/password/:token', passwordRedirect);

module.exports = router;
