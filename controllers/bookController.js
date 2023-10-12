const Book = require('../models/bookModel');

const addBook = (title) => {
  const book = new Book({ title });
  book
    .save()
    .then(() => {
      console.log('Book successfully added');
    })
    .catch((err) => {
      console.log(err);
    });
  return book;
};

const getBookById = (bookId) => {
  const book = Book.find({ bookId }).exec();
  return book;
};

const deleteBookById = (bookId) => {
  const book = Book.findOneAndRemove({ _id: bookId })
    .then((res) => res)
    .catch((err) => err);
  return book;
};

module.exports = { addBook, getBookById, deleteBookById };
