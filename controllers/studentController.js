const Student = require("../models/Students");

  exports.add = (req,res) => {
    console.log("inside add");
    var student = new Student({
    name : req.body.name,
    roll_no :req.body.roll_no,
    branch : req.body.branch,
    mobile_no : req.body.mobile_no
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
      mobile_no : "9811870412"
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
