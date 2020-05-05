const mongoose=require('mongoose');
const Loan=require("../models/Loan");
const Book = require('../models/Books');
const Student = require('../models/Students');

exports.listall = async (req, res) => {
    console.log("inside list");
    Book.find().lean().exec(function (err, blogs) {
     if(err) throw err;
    // res.status(200).send("List has been showed");
    res.status(200).send(blogs);
     console.log(blogs);
   });
   

}

exports.listallstudent = async (req, res) => {
    console.log("inside list");
    Student.find().lean().exec(function (err, record) {
     if(err) throw err;
   //  res.status(200).send("List has been showed");
   res.status(200).send(record);
   console.log(record);
   });

}


exports.issue = async (req,res) =>{
    console.log("inside issue");
    Student.findById(req.body.studentID)
    .then(student=>{
        if(!student){
            console.log("inside student if");
            console.log(student);
            return res.status(404).json({
                message: "Student not found"
              });
        }
    
    


    Book.findById(req.body.bookID)
    .then(book=>{
            if(!book){
                console.log("inside if");
                console.log(book);
                return res.status(404).json({
                    message: "Book not found"
                  });
            }
            var loan=new Loan({
                book:req.body.bookID,
                student:req.body.studentID,
                issuedDate: Date()
            });


            //updated book record
            var query={_id:book}
            var newbook={ 
            quantity:book.quantity-1
            };
            Book.updateOne(query,newbook,function(err, obj) {
                if (err) throw err;
                console.log("1 document updated"+obj);
              });


              // updated student record
              var query1={_id:student}
              var newstudent={
                  books:student.books+1
              };
              Student.updateOne(query1,newstudent,function(err, obj) {
                if (err) throw err;
                console.log("1 document updated"+obj);
              });

              //saving in database
             return loan.save().then(result =>{
                console.log(result);
                res.status(200).json(result);
        })
 
    })
})
    }

exports.show = (req,res) =>{
         if(req.cookies.authorization)
         
        console.log("inside show");
            Loan.find().populate('book','name').populate('student').exec(function (err, blogs) {
         if(err) throw err;
        // res.status(200).send("List has been showed");
          res.render('issuelist',{
            list:blogs
       })
       //  console.log(book);
    //res.status(200).send(blogs);
       });    
    }
