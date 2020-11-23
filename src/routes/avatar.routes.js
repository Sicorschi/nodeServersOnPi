const express = require('express');
const { getAllAvatars, addNewAvatar, getAvatar, deleteAvatar, editAvatar} = require('../controllers/avatar.controller');


const router = express.Router();

router.get('/', getAllAvatars);
router.post('/add', addNewAvatar);
router.delete('/delete/:id', deleteAvatar);
router.post('/edit/:id', editAvatar);
router.get('/:id', getAvatar);

module.exports = router;