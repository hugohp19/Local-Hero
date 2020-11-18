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
    let repInformation = [];

    for (let i = 0; i < offices.length; i++) {
      let rep = new Representatives({
        position: offices[i].name,
        roles: offices[i].roles,
        level: offices[i].levels[0]
      });

      if (offices[i].officialIndices.length < 2) {
        const index = offices[i].officialIndices[0];
        rep.name = officials[index].name;
        rep.party = officials[index].party;
        rep.photo = officials[index].photoUrl;
        rep.urls = officials[index].urls;
        rep.contactInfo.phoneNumber = officials[index].phones;
        rep.contactInfo.socialMedia = officials[index].channels; //X
        rep.contactInfo.address.street = officials[index].address[0].line1;
        rep.contactInfo.address.city = officials[index].address[0].city;
        rep.contactInfo.address.state = officials[index].address[0].state;
        rep.contactInfo.address.zipCode = officials[index].address[0].zip;
        repInformation.push(rep);
      } else {
        for (let j = 0; j < offices[i].officialIndices.length; j++) {
          const index = offices[i].officialIndices[j];
          // console.log(index);
          // console.log(officials[index]);
          rep.name = officials[index].name;
          rep.party = officials[index].party;
          rep.photo = officials[index].photoUrl;
          rep.urls = officials[index].urls;
          rep.contactInfo.phoneNumber = officials[index].phones;
          rep.contactInfo.socialMedia = officials[index].channels;
          rep.contactInfo.address.street = officials[index].address.line1;
          rep.contactInfo.address.city = officials[index].address.city;
          rep.contactInfo.address.state = officials[index].address.state;
          rep.contactInfo.address.zipCode = officials[index].address.zip;
          repInformation.push(rep);
        }
      }
    }

    res.status(205).json(repInformation);
    //res.status(202).json(officials);
    //console.log(offices);
  } catch (error) {
    console.log(error);
  }
};
