const router = require('express').Router();

router.get('/api/representatives', (request, response) => {
  response.json({
    message: 'get all reps'
  });
});
router.get('/api/representatives/:id', (request, response) => {
  response.json({
    message: 'get individual reps'
  });
});

module.exports = router;
