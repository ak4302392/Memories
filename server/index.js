import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
// const ADMIN_PASSWORD = "Amit8083##";
// const adminPassword = encodeURIComponent(process.env.ADMIN_PASSWORD);

const CONNECTION_URL =
  "mongodb+srv://ak43023:Amit8083@cluster0.xbdyg.mongodb.net/?retryWrites=true&w=majority";
// const PORT = 5000;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log("My err: ", error.message));

// app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
// mongoose.set("useFindAndModify", false);
