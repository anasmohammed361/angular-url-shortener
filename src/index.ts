import express from "express";
import mongoose from "mongoose";
import { urlModel } from "./lib/models";
import { config } from "dotenv";
import cors from "cors"
config();
const { DB_URI } = process.env;
if (!DB_URI) {
  throw new Error("No Database Url Found");
}

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cors())


mongoose.connect(DB_URI).then(() => {
  console.log("Db Connected");
}).catch(err=>{
  console.log("Unable to connect to Db");
  console.log(err);
  
  
});

app.get("/", async (req, res) => {
  res.sendFile("../public/index.html")
});

app.post("/", async (req, res) => {
  const { baseUrl, shortenedUrl } = req.body;
  if (!baseUrl || !shortenedUrl) {
    res.status(400).send("Please Fill all the fields");
    return;
  }
  const obj = new urlModel({ baseUrl, shortenedUrl });
try {
  await obj.save();
  res.sendStatus(201);
} catch (error) {
  res.status(400).send("Code Already Exist.")
}
});

app.get("/:shortenedUrl", async (req, res) => {
  const { shortenedUrl } = req.params;
  const url = await urlModel.findOne({ shortenedUrl }, { baseUrl: 1 });
  if (url) {
    res.redirect(url.baseUrl)
  } else {
    res.redirect("/");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});
