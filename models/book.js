// File derived from 20-MERN\01-Activities\05-Stu_ReactRouter\Solved\models\book.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
// The following lines set the information categories for the books as described in the instructions
    title: { type: String, required: true },
    authors: [{ type: String, required: true }],
    description: String,
    image: String,
    link: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;