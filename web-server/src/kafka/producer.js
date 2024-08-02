const kafka = require('./kafkaConfig');

const producer = kafka.producer();

const connectProducer = async () => {
    await producer.connect();
};

const sendMessage = async (topic, messages) => {
    console.log(`sending message to ${topic} msg: ${messages}`)
    await producer.send({
        topic: topic,
        messages: messages,
    });
};

const disconnectProducer = async () => {
    await producer.disconnect();
};

module.exports = {
    connectProducer,
    sendMessage,
    disconnectProducer,
};
