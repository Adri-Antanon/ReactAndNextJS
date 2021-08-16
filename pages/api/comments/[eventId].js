import {
  insertDocument,
  connectDatabase,
  getAllDocuments,
  errorMessage,
} from "../../../helpers/db-util";

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    errorMessage(res, 500, "Connecting to the database failed!");
    return;
  }

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
      errorMessage(res, 422, "Invalid input");
      client.close();
      return;
    }
    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;
    try {
      result = await insertDocument(client, "comments", newComment);
      newComment.id = result.insertedId;
      res.status(201).json({ message: "Added comment", comment: newComment });
    } catch (error) {
      errorMessage(res, 500, "Inserting data failed!");
    }
  }

  if (req.method === "GET") {
    let documents;
    try {
      documents = await getAllDocuments(
        client,
        "comments",
        { _id: -1 },
        { eventId: eventId }
      );
      res.status(200).json({ comments: documents });
    } catch (error) {
      errorMessage(res, 500, "Getting comments failed!");
    }
  }
  client.close();
}

export default handler;
