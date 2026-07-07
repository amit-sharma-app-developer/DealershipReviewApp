const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";

let db;

async function connectDB() {
    try {
        const client = new MongoClient(uri);

        await client.connect();

        db = client.db("dealerships");

        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
    }
}

function getDB() {
    return db;
}

module.exports = { connectDB, getDB };