import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

dotenv.config({ path: "./.env" });

const { PORT, DATABASE_URL } = process.env;

app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// app.get("/api/shoedata", (req, res) => {
//   client
//     .query("SELECT id, thumbnails, expandedimg FROM shoedata;")
//     .then((result) => {
//       res.send(result.rows);
//     });
// });

// app.get("/api/shoedata/:id", (req, res) => {
//   const { id } = req.params;
//   client.query("SELECT * FROM shoedata WHERE id = $1;", [id]).then((result) => {
//     res.send(result.rows[0]);
//   });
// });

// app.get("/api/shoedata/:id", (req, res) => {
//   let id = req.params.id;

//   client.query("SELECT * FROM shoedata WHERE id = $1;", [id]).then((result) => {
//     res.send(result.rows[0]);
//   });
// });

mongoose.connect(
  `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/shoes?authSource=admin`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
      });
    }
  }
);
