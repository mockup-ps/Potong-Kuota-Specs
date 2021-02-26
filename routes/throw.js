const express = require('express');
const router = express.Router();
const createHeader = require('../controller/postIzin');

router.post('/', createHeader);

module.exports = router;