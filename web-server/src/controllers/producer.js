const kafka = require('../config/kafka');

const producer = kafka.producer();

const connectProducer = async () => {
    await producer.connect();
};

const sendMessage = async (topic, messages) => {
    await producer.send({
        topic: topic,
        messages: messages
    });
};

const disconnectProducer = async () => {
    await producer.disconnect();
};

module.exports = {
    connectProducer,
    sendMessage,
    disconnectProducer
};
