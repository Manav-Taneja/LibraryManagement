const express=require('express');
//const router = express.Router();
//const controller = require("../controllers/indexcontroller");
//const auth=require('../middlewares/auth')
module.exports = (app) => {
      app.get('/book',async function(req,res){
      // console.log(req.headers['authorization']);
       console.log ('Cookies: ', req.cookies);
       console.log(req.cookies.authorization);
       if(req.cookies.authorization){
         res.render('book',{})
       }
      else{
        console.log(err);
      }
      })
     app.get('/student', async function(req,res) {
       try{
         res.render('addstudent',{});
       }
       catch(err){
         console.log(err);
       }
    });
    app.get('/', async function(req,res) {
      try{
        res.render('signup',{});
      }
      catch(err){
        console.log(err);
      }
   });
   app.get('/signin', async function(req,res) {
    try{
      res.render('signin',{});
    }
    catch(err){
      console.log(err);
    }
 });
  app.get('/bookanalytics', async function(req,res) {
   try{
     res.render('bookanalytics',{});
   }
   catch(err){
     console.log(err);
   }
 });
 app.get('/studentanalytics', async function(req,res) {
  try{
    res.render('studentanalytics',{});
  }
  catch(err){
    console.log(err);
  }
});
 app.get('/issue', async function(req,res) {
   try{
     res.render('bookissue',{});
   }
   catch(err){
     console.log(err);
   }
 });

 app.get('/bookrenderissue', async function(req,res) {
  try{
    res.render('bookissue',{});
  }
  catch(err){
    console.log(err);
  }
});
app.get('/reset', async function(req,res) {
  try{
    res.render('reset',{});
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