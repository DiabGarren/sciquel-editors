import { initDb } from "../../../lib/mongodb";

export default async function handler(req, res) {
    let { db } = await initDb();

    const topics = await db.collection("topics").find().toArray();

    res.status(200).json({ topics });
}
