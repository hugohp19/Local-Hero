const User = require('../db/models/user'),
  jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
  const { name, email, password, address } = req.body;
  try {
    const user = new User({
      name,
      email,
      password,
      address
    });
    // sendWelcomeEmail(user.email, user.name);
    // const token = await user.generateAuthToken();
    // res.cookie('jwt', token, {
    //   httpOnly: true,
    //   sameSite: 'Strict',
    //   secure: process.env.NODE_ENV !== 'production' ? false : true
    // });
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};
