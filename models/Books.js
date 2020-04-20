const mongoose = require('mongoose');

const Book =  mongoose.Schema({
    book_id:{type: Number,required: true},
    name: { type: String, required: true },
    author_name: {type: String,required: true},
    quantity: { type: Number, required: true }
})

module.exports = mongoose.model("Book", Book)