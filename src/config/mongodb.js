import { MongoClient } from "mongodb";
import { env } from "./enviroment";
const uri = env.MONGODB_URI;
console.log(uri);

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
export const connectDB = async () => {
  try {
    //connect pthe client to the server
    await client.connect();
    await listDbs(client);
    console.log("Connected successfullly");
  } finally {
    await client.close();
  }
};

const listDbs = async (client) => {
  const dbs = await client.db().admin().listDatabases();
  console.log(dbs);
};
