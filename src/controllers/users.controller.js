const User = require('../database/models/User.model');


async function getAllUsers(req, res) {
  User.findAll().then(records => {
    res.json(records);
  }).catch(err => {
    res.json({
      message: `Error getting all passwords: ${err.message}`
    });
  });
}

async function addNewUserAndShow(req, res) {
    User.findAll().then(records => {
      res.json(records);
    }).catch(err => {
      res.json({
        message: `Error getting all passwords: ${err.message}`
      });
    });
  }

module.exports = {
  getAllUsers,
  addNewUserAndShow
}

const Users = [
    {
        id: 2,
        name: '',
        username: '',
        passwords: '',
        description: ''
    }
];