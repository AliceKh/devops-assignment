const express = require('express');
const {buy} = require('../controllers/purchasesController')
const {getAllUserBuys} = require('../controllers/apiController')

const router = express.Router();

router.get('/getAllUserBuys', async (req, res) => await getAllUserBuys(res));
router.post('/buy', (req) => {
    try {
        buy(JSON.stringify(req.body)); //TODO
        return {
            success: true,
            status: 200,
        };
    } catch (e) {
        return {
            success: false, e
        };
    }
})

module.exports = router;
