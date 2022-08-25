import express from "express";
import { connectDB } from "./config/mongodb";
const app = express();
const hostname = 'localhost';
const port = 8989;

connectDB().catch(console.log)

app.get('/', (req, res) => {
  res.send('<h1>abc</h1>');
});

app.listen(port, hostname, () => {
  console.log('hello trung quna dev');
});
