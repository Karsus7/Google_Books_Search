// code derived from 20-MERN\01-Activities\05-Stu_ReactRouter\Solved\client\src\utils\API.js
// sets commands for index.js, Saved.js, Search.js
import axios from "axios";
// endpoint from googlebooks api
const BaseUrl = "https://www.googleapis.com/books/v1/volumes?q="

export default {
    // calls googlbooks api and retrieve books from search
    searchBooks: (query) => axios.get(BaseUrl + query),
    // Gets the book with the given id
    getBooks: () => axios.get("/api/books"),
    // saves a book
    saveBook: (bookData) => axios.post("/api/books", bookData),
    // deletes a book with the given id
    deleteBook: (id) => axios.delete("api/books/" + id)
};