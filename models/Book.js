
const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    title: { type: String },
    authors: { type: Array },
    image: { type: String },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;