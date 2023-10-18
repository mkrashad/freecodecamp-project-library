const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: { type: String, require: true },
  comments: [String],
});

module.exports = mongoose.model('Book', bookSchema);