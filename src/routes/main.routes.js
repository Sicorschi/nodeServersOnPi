const express = require('express');
const { getAllUsers, addNewUserAndShow } = require('../controllers/users.controller');


const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/add', addNewUserAndShow);

module.exports = router;