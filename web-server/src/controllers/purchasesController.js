require('dotenv').config();
const {connectProducer, sendMessage, disconnectProducer} = require('../kafka/producer');

const buy = async (value) => {
    try {
        value.timestamp = new Date();
        console.log(value)
        await sendMessage(process.env.KAFKA_TOPIC, [{value: value}]);
    } catch (err) {
        return new Error(`Error in sending message: ${err}`);
    }
};

module.exports = {
    buy,
};
