const {Kafka: KafkaConfig} = require('kafkajs');
const dotenv = require('dotenv');

dotenv.config();

const kafka = new KafkaConfig({
    clientId: process.env.KAFKA_CLIENT_ID,
    brokers: process.env.KAFKA_BROKERS.split(','),
    ssl: process.env.KAFKA_SSL === 'true',
    sasl: {
        mechanism: process.env.KAFKA_SASL_MECHANISM,
        username: process.env.KAFKA_SASL_USERNAME,
        password: process.env.KAFKA_SASL_PASSWORD,
    },
});

const consumer = kafka.consumer({groupId: process.env.KAFKA_CLIENT_ID}); // TODO

const consumeMessages = async (func) => {
    await consumer.connect();
    await consumer.subscribe({topic: process.env.KAFKA_TOPIC, fromBeginning: true});

    await consumer.run({
        eachMessage:
            async ({topic, partition, message}) => {
                // // console.log({
                // //     partition, offset: message.offset, value: message.value.toString(),
                // // });
                // console.log(message.value.toString())
                // console.log(JSON.stringify(message)['value'])
                func(message.value.toString());
            },
    });
};

module.exports = {consumeMessages};
