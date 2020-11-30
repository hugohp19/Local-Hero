// require('./db/config');
// const express = require('express'),
//   path = require('path'),
//   openRoutes = require('./routes/open/users');

require('./db/config/index');
const express = require('express'),
  app = express(),
  openRoutes = require('./routes/open/users'),
  openRoutesRep = require('./routes/open/representatives'),
  userRouter = require('./routes/secure/users'),
  operRoutesIssues = require('./routes/open/issues');
(passport = require('./middleware/authentication/index')),
  (fileUpload = require('express-fileupload')),
  (cookieParser = require('cookie-parser')),
  (path = require('path'));
axios = require('axios');

//Middleware
app.use(express.json());

// Unauthenticated routes
app.use(operRoutesIssues);
app.use(openRoutes);
app.use('/rep', openRoutesRep);

//Middleware to parse through incoming cookies in the requests.
app.use(cookieParser());

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Any authentication middleware and related routing would be here.
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/images'
  })
);

app.use('/api/*', passport.authenticate('jwt', { session: false }));

app.use('/api/users', userRouter);

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;

// // this is the api for city of miami
app.get('/localissuespage', async (req, res) => {
  const apiURL = `https://data.miamigov.com/resource/6q9s-asrs.json?`;
  const { data } = await axios.get(apiURL, {
    headers: {
      'X-App-Token': process.env.APP_TOKEN
    }
  });

  // });
  res.send(data);
});
