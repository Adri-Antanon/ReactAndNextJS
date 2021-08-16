import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://Adri:Contra123@nextjscluster.bykul.mongodb.net/events?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    //   add server-side validation
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    const newComment = {
      email,
      name,
      text,
      eventId,
    };
    const db = client.db();

    const result = await db.collection("comments").insertOne(newComment);

    console.log(result);

    newComment.id = result.insertedId;

    res.status(201).json({ message: "Added comment", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Adri", text: "Hi, this is a comment" },
      { id: "c2", name: "Andrea", text: "Hi, I want a pet so I choose Zeus!" },
    ];

    client.close();

    res.status(200).json({ comments: dummyList });
  }
}

export default handler;
