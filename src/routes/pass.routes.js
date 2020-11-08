const express = require('express');
const { getAllpasswords } = require('../controllers/pass.controller');

const router = express.Router();

router.get('/', getAllpasswords);

module.exports = router;