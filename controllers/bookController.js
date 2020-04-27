const Book = require("../models/Books");
  exports.add = (req,res) => {
    console.log("inside add");
    console.log(req.body);
    var book = new Book({
    book_id : req.body.book_id,
    name : req.body.name,
    author_name : req.body.author_name,
    quantity : req.body.quantity
  });
    book.save().then(() => {
      console.log("saved")
    res.status(200).send(book)});
}
 exports.delete= async (req, res) => {
     console.log("inside delete ");
     var book = req.url.split("/")[3];
     var query = {book_id: book};
     Book.deleteOne(query, function(err, obj) {
      if (err) throw err;
      //res.status(200).send("Document deleted successfully");
      res.redirect('/book');
      console.log("1 document deleted");
    });
 }
 exports.update = async (req, res) => {
     console.log("inside update");
     Book.findOneAndUpdate({_id:req.body._id,},req.body,{new:true},(err,doc) => {
      if(!err){
          res.redirect('/list');
      }
      else{
          if(err.name == "ValidationError")
          {
              handleValidationError(err,req.body);
              res.render("book",{
                  viewTitle:'Update book',
                  book:req.body
              });
          }
          else{
              console.log("Error occured in Updating the records" + err);
          }
      }
  })
}
    

 exports.listall = async (req, res) => {
     console.log("inside list");
     Book.find().lean().exec(function (err, blogs) {
      if(err) throw err;
     // res.status(200).send("List has been showed");
     res.render('list',{
      list:blogs
    })
      console.log(blogs);
    });
    

}
 exports.find = async (req,res) =>{
   console.log("inside find");
   var book = req.url.split("/")[3];
   var query={name: book};
   Book.find(query).lean().exec(function (err, blogs) {
    if(err) throw err;
    res.status(200).send(blogs)
    console.log(blogs);
  });

 }
exports.data =async(req,res)=>{
console.log("inside data");
 // var query = { quantity : {$gt:10} };
  Book.find( { quantity : {$gt:1} },{quantity:1,_id:0,name:1}).lean().exec(function(err, quantityarr) {
    if (err) throw err;
    console.log(quantityarr);
    var x;
    var valuearr=[];
    var namearr=[];
    var i=0;
    for(x in quantityarr){
     // console.log(quantityarr[x].quantity);
     // console.log(quantityarr[x].name);
      valuearr[i]=quantityarr[x].quantity;
      namearr[i]=quantityarr[x].name
      i++;
    }
    console.log(valuearr);
    console.log(namearr);
  });

}
 
