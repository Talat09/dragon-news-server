const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("news api is running");
});
//get categories name create api
app.get("/news-categories", (req, res) => {
  res.send(categories);
});
//find news for id wise create api
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});
app.get("/news", (req, res) => {
  res.send(news);
});
//categories wise api check
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const category_news = news.filter((n) => n.category_id === id);
    res.send(category_news);
  }
});
app.listen(port, () => {
  console.log("Dragon server is running on port: ", port);
});
