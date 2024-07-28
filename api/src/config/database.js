const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const mongoUrl = process.env.MONGODB_URL;
const dbName = process.env.DB_NAME;

let db;

const connectToDatabase = async () => {
    if (db) return db;

    const client = new MongoClient(mongoUrl);

    try {
        await client.connect();
        db = client.db(dbName);
        console.log(`Connected to database: ${dbName}`);
        return db;
    } catch (err) {
        console.error('Failed to connect to the database.', err);
        process.exit(1);
    }
};

module.exports = connectToDatabase;
