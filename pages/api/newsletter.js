import { MongoClient } from "mongodb";
// import { MONGO_DB } from "../../helpers/api-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "invalid email address." });
      return;
    }

    // const client = await MONGO_DB();

    const client = await MongoClient.connect(
      "mongodb+srv://Adri:Contra123@nextjscluster.bykul.mongodb.net/events?retryWrites=true&w=majority"
    );

    const db = client.db();

    await db.collection("newsletter").insertOne({ email: userEmail });

    client.close();

    res.status(201).json({ messagge: "Signed up!", userEmail });
  }
}

export default handler;
