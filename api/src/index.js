const express = require('express');
const dotenv = require('dotenv');
const buysRoutes = require('./routes/userPurchasesRoutes');
const {consumeMessages} = require("./controllers/kafka");
const {writePurchase} = require("./controllers/userPurchasesController");

dotenv.config();

const app = express();
const port = 3000;

app.use('/api', buysRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    consumeMessages(writePurchase).catch(console.error);
});
