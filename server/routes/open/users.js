const router = require('express').Router();

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
router.patch('/api/user/:id', (request, response) => {
  response.json({
    message: 'update users'
  });
});
router.post('/api/logout', (request, response) => {
  response.json({
    message: 'logout'
  });
});
router.post('/api/signup', (request, response) => {
  response.json({
    message: 'signup'
  });
});

module.exports = router;
