const connectToDatabase = require('../config/database');

const purchasesCollection = 'purchases';
const getAllUserBuys = async (req, res) => {
    try {
        const db = await connectToDatabase();
        const buysCollection = db.collection(purchasesCollection);
        const buys = await buysCollection.find({}).toArray();
        res.status(200).json(buys);
    } catch (error) {
        console.error(`Error fetching data from ${purchasesCollection} collection`, error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAllUserBuys,
};
