import fs from "fs";
import path from "path";
import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); // Parse URL-encoded bodies using query-string library
// or
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies using qs library

// mongoose.connect(
//   "mongodb://mongodb(name of above container):27017/swfavorites",
//   { useNewUrlParser: true },
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//   }
// );

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
