require('dotenv').config();
const {connectProducer, sendMessage, disconnectProducer} = require('./producer');

const buy = async (value) => {
    try {
        await connectProducer();
        await sendMessage(process.env.KAFKA_TOPIC, [{value: value}]);
    } catch (err) {
        console.error('Error in sending message:', err);
    } finally {
        await disconnectProducer();
    }
};

