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

const getAllBooks = () => {
  const books = Book.find().exec();
  return books;
};

const getBookById = (bookId) => {
  const book = Book.findById({ _id: bookId });
  return book;
};

const deleteAllBooks = () => {
  const book = Book.deleteMany();
  return book;
};

const deleteBookById = (bookId) => {
  const book = Book.findOneAndRemove({ _id: bookId })
    .then((res) => res)
    .catch((err) => err);

  return book;
};

const addPost = (bookId, data) => {
  const book = Book.updateOne({ _id: bookId }, { $push: { comments: data } });
  return book;
};

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  deleteAllBooks,
  deleteBookById,
  addPost,
};
