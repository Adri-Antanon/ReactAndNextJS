import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const stringDatabase = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.bykul.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(stringDatabase);

  return client;
}
