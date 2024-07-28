const { Kafka } = require('kafkajs');
const dotenv = require('dotenv');

dotenv.config();

const kafka = new Kafka({
    clientId: 'my-node-api',
    brokers: [process.env.KAFKA_BROKER]
});

const consumer = kafka.consumer({ groupId: 'my-group' });

const consumeMessages = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: process.env.KAFKA_TOPIC, fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                partition,
                offset: message.offset,
                value: message.value.toString(),
            });
        },
    });
};

module.exports = { consumeMessages };
