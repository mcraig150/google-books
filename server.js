const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/Book.js");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const connection_URL = `mongodb+srv://admin:WwTshDGMUT87mXkS@cluster0.vnhkx.mongodb.net/google-books?retryWrites=true&w=majority`;
mongoose.connect(connection_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/api/book", (req, res) => {
  Book.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/books", (req, res) => {
  Book.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.delete("/api/delete/:id", (req, res) => {
  Book.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Book Deleted");
    }
  });
});

app.listen(port, () => console.log(`Listening on localhost:${port}`));
