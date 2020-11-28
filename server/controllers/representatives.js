const axios = require('axios');
const Representatives = require('../db/models/representatives');

exports.getRepByZipcode = async (req, res) => {
  try {
    const address = req.query.address;

    const { data } = await axios({
      url: `https://cicero.azavea.com/v3.1/official?search_postal=${address}&search_country=US&order=district_type&sort=desc&format=json&key=${process.env.CICERO_API_KEY}`,
      method: 'GET'
    });

    const response = data.response.results.candidates[0];

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
