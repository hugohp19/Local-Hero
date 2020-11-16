const router = require('express').Router(),
  {
    createUser,
    loginUser,
    requestPasswordReset,
    passwordRedirect
  } = require('../../controllers/users');

router.post('/api/login', loginUser);
router.post('/api/signup', createUser);
router.get('/password', requestPasswordReset);
router.get('/password/:token', passwordRedirect);

// router.get('/api/', (request, response) => {
//   response.json({
//     message: 'home'
//   });
// });

module.exports = router;
