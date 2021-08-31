const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  desc: String,
  year: Number,
  genre: String,
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
