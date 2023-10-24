const Book = require('../models/bookModel');
const { ObjectId } = require('mongodb');

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
  try {
    const bookObjectId = new ObjectId(bookId);
    const book = Book.findById({ _id: bookObjectId });
    return book;
  } catch (error) {
    return null;
  }
};

const deleteAllBooks = () => {
  const book = Book.deleteMany();
  return book;
};

const deleteBookById = (bookId) => {
  try {
    const bookObjectId = new ObjectId(bookId);
    const book = Book.findOneAndRemove({ _id: bookObjectId });
    return book;
  } catch (error) {
    return null;
  }
};

const addPost = (bookId, data) => {
  const book = Book.updateOne(
    { _id: bookId },
    { $push: { comments: data } },
    { new: true }
  );

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
