const Student = require("../models/Students");
//const IssuedBook =  require("../models/IssuedBooks");
  exports.add = (req,res) => {
    console.log("inside add");
    var student = new Student({
    name : req.body.name,
    roll_no :req.body.roll_no,
    branch : req.body.branch,
    books : req.body.books
  });
    
    student.save().then(() => {
    res.status(200).send(student)});
}
 exports.delete= async (req, res) => {
     console.log("inside delete ");
     var rollno = req.url.split("/")[3];
     var query = {roll_no : rollno};
     Student.deleteOne(query, function(err, obj) {
      if (err) throw err;
      res.status(200).send("Record deleted successfully");
      console.log("1 record deleted");
    });
 }
 exports.update = async (req, res) => {
     console.log("inside update");
     var rollno = req.url.split("/")[3];
     var query = {roll_no: rollno};
     var newstudent = {
      name : "manav",
      roll_no : "8",
      branch : "cse",
      books : "10"
     };
     Student.updateOne(query, newstudent, function(err, obj) {
      if (err) throw err;
      res.status(200).send("Document updated successfully");
      console.log("1 document updated");
    });
    

 }
 exports.listall = async (req, res) => {
     console.log("inside list");
     Student.find().lean().exec(function (err, record) {
      if(err) throw err;
      res.status(200).send("List has been showed");
      console.log(record);
    });

}

exports.data =async(req,res)=>{
  console.log("inside data");
   // var query = { quantity : {$gt:10} };
    Student.find( { books : {$gt:2} },{books:1,_id:0,name:1}).lean().exec(function(err, quantityarr) {
      if (err) throw err;
      console.log(quantityarr);
      var x;
      var valuearr=[];
      var namearr=[];
      var i=0;
      for(x in quantityarr){
       // console.log(quantityarr[x].quantity);
       // console.log(quantityarr[x].name);
        valuearr[i]=quantityarr[x].books;
        namearr[i]=quantityarr[x].name
        i++;
      }
      console.log(valuearr);
      console.log(namearr);
    });
  
  }
