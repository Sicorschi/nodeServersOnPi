const Pass = require('../database/models/Pass.model');


async function getAllPasswords(req, res) {
  Pass.findAll().then(records => {
    res.json(records);
  }).catch(err => {
    res.json({
      message: `Error getting all passwords: ${err.message}`
    });
  });
}

module.exports = {
  getAllPasswords
}