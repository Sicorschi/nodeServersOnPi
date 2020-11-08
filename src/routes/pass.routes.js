const express = require('express');
const { getAllPasswords } = require('../controllers/pass.controller');

const router = express.Router();

router.get('/', getAllPasswords);

module.exports = router;