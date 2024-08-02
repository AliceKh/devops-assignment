const express = require('express');
const {buy} = require('../controllers/purchasesController')
const {getAllUserBuys} = require('../controllers/apiController')

const router = express.Router();

router.get('/getAllUserBuys', async (req, res) => await getAllUserBuys(res));
router.post('/buy', async (req, res) => {
    try {
        await buy(req.body);
        res.status(200).json({success: "Purchase received"})
    } catch (e) {
        res.status(500).json({error: 'Failed to send purchase: ', e})
    }
})

module.exports = router;
