const connectToDatabase = require('../config/database');

const purchasesCollection = 'purchases';
let db;
const dbConnected = false;
const getAllUserBuys = async (req, res) => {
    try {
        if (!dbConnected) db = await connectToDatabase();
        const buysCollection = db.collection(purchasesCollection);
        const buys = await buysCollection.find({}).toArray();
        res.status(200).json(buys);
    } catch (error) {
        console.error(`Error fetching data from ${purchasesCollection} collection`, error);
        res.status(500).send('Internal Server Error');
    }
};

const writePurchase = async (message) => {
    try {
        if (!dbConnected) db = await connectToDatabase();
        const buysCollection = db.collection(purchasesCollection);
        message = JSON.parse(message);
        await buysCollection.insertOne(message).then(console.log(`wrote to ${purchasesCollection} ${message}`))
    } catch (error) {
        console.error(`Error fetching data from ${purchasesCollection} collection`, error);
    }
}

module.exports = {
    getAllUserBuys, writePurchase
};
