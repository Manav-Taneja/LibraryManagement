// const express = require("express")
// const router = express.Router()
//const bodyParser = require('body-parser');
//var urlendcodedParser = bodyParser.urlencoded({extended:false})
module.exports = (app) => {
const booksController = require('../controllers/bookController')

app.post('/book/add', booksController.add);

app.delete('/book/delete/:id', booksController.delete);

app.put('/book/update/:id', booksController.update);

app.get("/book/listall", booksController.listall);

app.get('/book/find/:id', booksController.find);
}
