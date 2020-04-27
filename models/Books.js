const mongoose = require('mongoose');

const Book =  mongoose.Schema({
    book_id:{type: Number},
    name: { type: String},
    author_name: {type: String},
    quantity: { type: Number}
})

module.exports = mongoose.model("Book", Book) 