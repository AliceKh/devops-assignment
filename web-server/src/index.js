const express = require('express');
const dotenv = require('dotenv');
const customerRoutes = require('./routes/customerRoutes');
const {createTopic} = require('./kafka/topic');
const {connectProducer} = require("./kafka/producer");

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use('', customerRoutes);

createTopic(process.env.KAFKA_TOPIC).catch(console.error);
connectProducer().then(r => console.log("connected to kafka"));
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
