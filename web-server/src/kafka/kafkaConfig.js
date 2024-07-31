const { Kafka: KafkaConfig } = require('kafkajs');
require('dotenv').config();

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

module.exports = kafka;
