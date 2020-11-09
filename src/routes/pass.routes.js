const express = require('express');
const { getAllPasswords, addNewPass, deletePass, updatePass, getPass } = require('../controllers/pass.controller');

const router = express.Router();

router.get('/', getAllPasswords);
router.post('/add', addNewPass);
router.delete('/delete/:id', deletePass);
router.post('/update/:id', updatePass);
router.get('/one/:id', getPass);

module.exports = router;