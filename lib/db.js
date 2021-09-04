import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://Adri:Contra123@nextjscluster.bykul.mongodb.net/authentication?retryWrites=true&w=majority"
  );

  return client;
}
