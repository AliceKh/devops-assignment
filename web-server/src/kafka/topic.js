require('dotenv').config();
const kafka = require('./kafkaConfig');

const createTopic = async (topicName) => {
    const admin = kafka.admin();
    await admin.connect();

    try {
        await admin.createTopics({
            topics: [
                {
                    topic: topicName,
                    numPartitions: 3,
                    replicationFactor: 1,
                },
            ],
        });
        console.log(`Topic "${topicName}" created successfully.`);
    } catch (error) {
        console.error(`Failed to create topic "${topicName}":`, error);
    } finally {
        await admin.disconnect();
    }
};
module.exports = {
    createTopic,
};
