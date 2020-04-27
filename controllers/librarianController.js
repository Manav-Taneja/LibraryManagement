const Librarian = require("../models/Librarian");
const PasswordHash = require("password-hash");
const Token = require("../models/Tokens");

exports.signup = (req,res) =>{
    console.log("inside signup");
    var librarian = new Librarian({
    name : req.body.name,
    username : req.body.username,
    password :PasswordHash.generate(req.body.password)
});


    //send email
    var nodemailer = require('nodemailer');

/*var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'manav.taneja26@gmail.com',
    pass: 'taneja99'
  }
});

var mailOptions = {
  from: 'manav.taneja26@gmail.com',
  to: 'username',
  subject: 'Verification mail',
  text: 'http://localhost:3000/book'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})*/

    
    librarian.save().then(()=> {
        res.status(200).send(librarian);
        console.log("insert");
    });
    
}

exports.signin = async (req,res) =>{
   console.log("inside signin");
   var user = await Librarian.findOne({ username: req.body.username })
   if (!user) {
       return res.status(404).send({ message: "Account does not exists" })
   }
   if (!PasswordHash.verify(req.body.password, user.password)) {
       return res.status(403).send({ message: "Invalid password" })
   }
   var token = new Token({ userId: user._id })
   token = await token.save()

   res.header("authorization", token._id)
   res.status(200).send(user)
   console.log("Signin Success");
}


exports.reset = async (req,res)=>{
    console.log("inside reset");
    var user = await Librarian.findOne({ username: req.body.username })
    if (!user) {
      return res.status(404).send({ message: "Account does not exists" })
  }
  if (!PasswordHash.verify(req.body.password, user.password)) {
      return res.status(403).send({ message: "Invalid password" })
  }
  
  var email = req.url.username;
  var query = {username: email};
  var newpassword = {
   password:PasswordHash.generate(req.body.newpassword)
  };
  Librarian.updateOne(query, newpassword, function(err, obj) {
   if (err) throw err;
   res.status(200).send("Document updated successfully");
   console.log("1 document updated");
 });
   
}

exports.signout = async (req,res) =>{
  console.log("inside signout");
  var token = await Token.findByIdAndDelete(req.token._id)
  console.log(token)
  res.status(200).send({ message: "Signout success" })

}