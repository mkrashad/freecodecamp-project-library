/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

'use strict';
const bookService = require('../controllers/bookController.js');
module.exports = function (app) {
  app
    .route('/api/books')
    .get(async function (req, res) {
      //response will be array of book objects
      //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]
      const books = await bookService.getAllBooks();
      if (books) {
        const result = books.map((book) => {
          return {
            _id: book._id,
            title: book.title ? book.title : 'none',
            commentcount: book.comments.length,
          };
        });
        res.status(200).json(result);
      }
    })

    .post(function (req, res) {
      let title = req.body.title;
      const result = bookService.addBook(title);
      if (title) {
        res.status(200).json({
          _id: result._id,
          title: result.title,
        });
      }
      //response will contain new book object including atleast _id and title
      res.status(200).json('missing required field title');
    })

    .delete(async function (req, res) {
      //if successful response will be 'complete delete successful'
      const result = await bookService.deleteAllBooks();
      if (result) {
        res.json('complete delete successful');
      }
    });

  app
    .route('/api/books/:id')
    .get(async function (req, res) {
      const bookid = req.params.id;
      //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}
      const book = await bookService.getBookById(bookid);
      if (book) {
        res.status(200).json({
          _id: book._id,
          title: book.title,
          comments: book.comments,
        });
      } else {
        res.status(404).json('no book exists');
      }
    })

    .post(function (req, res) {
      let bookid = req.params.id;
      let comment = req.body.comment;
      //json res format same as .get
    })

    .delete(async function (req, res) {
      let bookid = req.params.id;
      //if successful response will be 'delete successful'
      const result = await bookService.deleteBookById(bookid);
      if (result) {
        res.json('delete successful');
      } else {
        res.json('no book exists');
      }
    });
};
