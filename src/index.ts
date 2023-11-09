import express from "express";
import mongoose from "mongoose";
import { urlModel } from "./lib/models";

const app = express();

app.use(express.json());
app.use(express.static("public"))
mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
  console.log("Db Connected");
});

app.get("/", async (req, res) => {
  const data = await urlModel.find();
  res.json(data);
});

app.post("/", async (req, res) => {
  const { baseUrl, shortenedUrl } = req.body;
  if (!baseUrl || !shortenedUrl) {
    res.sendStatus(400);
    return;
  }
  const obj = new urlModel({ baseUrl, shortenedUrl });
  await obj.save();
  res.sendStatus(201);
});

app.get("/:shortenedUrl", async (req, res) => {
  const { shortenedUrl } = req.params;
  const url = await urlModel.findOne({ shortenedUrl }, { baseUrl: 1 });
  if (url) {
    res.json(url);
  } else {
    res.sendStatus(404);
  }
});


app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000/");
    
})