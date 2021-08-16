import {
  connectDatabase,
  errorMessage,
  insertDocument,
} from "../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      errorMessage(res, 422, "Invalid email address");
      return;
    }
    let client;

    try {
      client = connectDatabase();
    } catch (error) {
      errorMessage(res, 500, "Connecting to the database failed!");
      return;
    }

    try {
      await insertDocument(client, "newsletter", { email: userEmail });
      client.close();
    } catch (error) {
      errorMessage(res, 500, "Inserting data failed!");
      return;
    }
  }
}

export default handler;
