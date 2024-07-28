const express = require('express');
const { getAllUserBuys } = require('../controllers/userPurchasesController');

const router = express.Router();

router.get('/getAllUserBuys', getAllUserBuys);

module.exports = router;
