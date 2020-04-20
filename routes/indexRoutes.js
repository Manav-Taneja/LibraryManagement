module.exports = (app) => {
  //  const booksController = require('../controllers/bookController')
    
    app.get('/', function(req,res){
        res.render('book',{});
    });
}    