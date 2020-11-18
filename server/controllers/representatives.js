const axios = require('axios');
const Representatives = require('../db/models/representatives');

exports.getRepByZipcode = async (req, res) => {
  try {
    const city = req.body.city;
    const { data } = await axios({
      url: `https://www.googleapis.com/civicinfo/v2/representatives?key=${process.env.CIVIC_KEY}&address=${city}`,
      method: 'GET'
    });
    const offices = data.offices;
    const officials = data.officials;
    res.status(202).json(officials);
    console.log(offices);
  } catch (error) {
    console.log(error);
  }
};
