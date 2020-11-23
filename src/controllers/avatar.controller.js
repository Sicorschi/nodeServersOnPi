const Avatar = require('../database/models/Avatar');
const { catchError, send200Status, parseAvatar } = require('./genericFunctions');


async function getAllAvatars(req, res) {
  Avatar.findAll().then(records => {
    res.json(records);
  }).catch(err => {
    res.json(catchError(err));
  });
}

async function addNewAvatar(req, res) {
  console.log(req.body);
  const bodyParsed = parseAvatar(req.body);
  Avatar.build(bodyParsed).save().then(avatar => {
    res.json(avatar);
  }).catch(err => {
    res.json(catchError(err));
  });
}

async function deleteAvatar(req, res) {
  const { id } = req.params;
  Avatar.destroy({
    where: {
      id
    }
  }).then(() => {
    res.json(send200Status('DELETE'));
  }).catch(err => {
    res.json(catchError(err));
  });
}

async function getAvatar(req, res) {
  const { id } = req.params;
  Avatar.findOne({
    where: {
      id
    }
  }).then(avatar => {
    res.json(avatar);
  }).catch(err => {
    res.json(catchError(err));
  });
}

async function editAvatar(req, res) {
  console.log(req.body);
  const { id } = req.params;
  const bodyParsed = parseAvatar(req.body);
  Avatar.update(bodyParsed,
    {
    where: {
      id
    }
  }).then(() => {
    res.json(send200Status('UPDATE'));
  }).catch(err => {
    res.json(catchError(err));
  });
}


module.exports = {
  getAllAvatars,
  addNewAvatar,
  deleteAvatar,
  editAvatar,
  getAvatar
}
