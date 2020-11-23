const Pass = require('../database/models/Pass');
const { catchError, send200Status, parsePass } = require('./genericFunctions');


async function getAllPass(req, res) {
  Pass.findAll().then(records => {
    res.json(records);
  }).catch(err => {
    res.json(catchError(err));
  });
}

async function addNewPass(req, res) {
  console.log(req.body);
  const bodyParsed = parsePass(req.body);
  Pass.build(bodyParsed).save().then((record) => {
    res.json(record);
  }).catch(err => {
    res.json(catchError(err));
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
    res.json(catchError(err));
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
    res.json(catchError(err));
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
    res.json(catchError(err));
  });
}


module.exports = {
  getAllPass,
  addNewPass,
  deletePass,
  updatePass,
  getPass
}