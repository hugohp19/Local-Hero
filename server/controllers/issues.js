const axios = require('axios');
const Issues = require('../db/models/issues');

exports.postIssue = async (req, res) => {
  try {
    const { category, issuePhoto, description } = req.body;
    const issue = new Issues({
      category,
      issuePhoto,
      description
    });

    await issue.save();

    res.status(200).json(issue);
  } catch (error) {
    console.log(error);
  }
};
