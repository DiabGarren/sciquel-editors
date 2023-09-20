import { Db, MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

let cachedClient: MongoClient;
let cachedDb: Db;

export async function initDb() {
    if (cachedClient && cachedDb) {
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    if (!MONGODB_URI) {
        throw new Error("Define the MONGODB_URI environment variable");
    }

    let client = new MongoClient(MONGODB_URI);
    await client.connect();
    let db = client.db("sciquel-editors");

    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}
