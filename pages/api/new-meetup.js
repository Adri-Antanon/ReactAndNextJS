import { connectToDatabase } from "../../lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await connectToDatabase();
    const db = client.db();

    const meetupsCollection = db.collection(`${process.env.mongodb_database}`);

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    res.status(201).json({ message: "Meetup inserted!" });

    client.close();
  }
}

export default handler;
