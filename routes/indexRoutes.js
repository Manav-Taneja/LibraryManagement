module.exports = (app) => {
  //  const booksController = require('../controllers/bookController')
    
    app.get('/', async function(req,res) {
      try{
        res.render('book',{});
      }
      catch(err){
        console.log(err);
      }
    });
      
    // app.get('/', async function(req,res) {
    //   try{
    //     res.render('book',{});
    //   }
    //   catch(err){
    //     console.log(err);
    //   }
    // });
}    