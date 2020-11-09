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

function parsePass(body) {
  const { name, userName, password, description } = body;
  const parsedData = {
    name,
    userName,
    password,
    description
  };
  return parsedData;
}

function catchAndSendError(err) {
  const errorMessage = {
    message: err.message
  };
  return errorMessage;
}

function send200Status(input) {
  const succesMessage = {
    message: `${input} was succesfully deployed`
  };
  return succesMessage;
}

async function addNewPass(req, res) {
  console.log(req.body);
  const bodyParsed = parsePass(req.body);
  Pass.build(bodyParsed).save().then((record) => {
    res.json(record);
  }).catch(err => {
    res.json(catchAndSendError(err));
  });
}


async function deletePass(req, res) {
  const { id } = req.params;
  Pass.destroy({
    where: {
      id
    }
  }).then(() => {
    res.json(send200Status('DELETE'));
  }).catch(err => {
    res.json(catchAndSendError(err));
  });
}


async function updatePass(req, res) {
  const { id } = req.params;
  const bodyParsedToUpdate = parsePass(req.body);
  Pass.update(
    bodyParsedToUpdate, {
      where: {
        id
      }
    }
  ).then(() => {
    res.json(send200Status('UPDATE'));
  }).catch(err => {
    res.json(catchAndSendError(err));
  });
}


async function getPass(req, res) {
  const { id } = req.params;
  Pass.findOne({
    where: {
      id
    }
  }).then(record => {
    res.json(record);
  }).catch(err => {
    res.json(catchAndSendError(err));
  });
}


module.exports = {
  getAllPasswords,
  addNewPass,
  deletePass,
  updatePass,
  getPass
}