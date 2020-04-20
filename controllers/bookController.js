const Book = require("../models/Books");

  exports.add = (req,res) => {
    console.log("inside add");
    var book = new Book({
    book_id : req.body.book_id,
    name : req.body.name,
    author_name : req.body.author_name,
    quantity : req.body.quantity
  });
    book.save().then(() => {
    res.status(200).send(book)});
}
 exports.delete= async (req, res) => {
     console.log("inside delete 1");
     var book = req.url.split("/")[3];
     var query = {book_id: book};
     Book.deleteOne(query, function(err, obj) {
      if (err) throw err;
      res.status(200).send("Document deleted successfully");
      console.log("1 document deleted");
    });
 }
 exports.update = async (req, res) => {
     console.log("inside update");
     var book = req.url.split("/")[3];
     var query = {name: book};
     var newbook = {
      name : "manav",
      author_name : "taneja",
      quantity : "2"
     };
     Book.updateOne(query, newbook, function(err, obj) {
      if (err) throw err;
      res.status(200).send("Document updated successfully");
      console.log("1 document updated");
    });
    

 }
 exports.listall = async (req, res) => {
     console.log("inside list");
     Book.find().lean().exec(function (err, blogs) {
      if(err) throw err;
      res.status(200).send("List has been showed");
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
