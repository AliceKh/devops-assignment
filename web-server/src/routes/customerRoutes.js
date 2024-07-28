const express = require('express');
const {buy} = require('../controllers/purchasesController')
const {getAllUserBuys} = require('../controllers/apiController')

const router = express.Router();

router.get('/getAllUserBuys', async (req, res) => await getAllUserBuys(res));
router.post('/buy', (req) => buy(req.body)) //TODO

module.exports = router;
