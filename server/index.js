import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/student.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

// limits images to 20mb and extends to include data other than string
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use("/students", studentRoutes);

const CONNECTION_URL = process.env.MONGO_URL;

const PORT = process.env.PORT || 5000;

// this returns a promise. if it is resolved, it will execute the .then callback function, else the .catch callback function
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Connection is established and running on port: ${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));

// set to false to avoid warnings in console
mongoose.set("useFindAndModify", false);
