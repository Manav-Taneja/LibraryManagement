const Librarian = require("../models/Librarian");
const PasswordHash = require("password-hash");
const Token = require("../models/Tokens");
exports.signup = async(req,res) =>{
    console.log("inside signup");
    var librarian = new Librarian({
    name : req.body.name,
    email : req.body.email,
    password :PasswordHash.generate(req.body.password)
});
//res.send({msg:"Email sent to above email address please verify"})
var user=req.body.email;
var token = new Token({ userId: user._id })
token = await token.save()

res.header("authorization", token._id)

    var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'manav18csu121@ncuindia.edu',
    pass: 'manav54321'
  }
});

var mailOptions = {
  from: 'manav18csu121@ncuindia.edu',
  to: req.body.email,
  subject: 'Verification mail',
 // text: 'http://localhost:3000/show'
  html:"<h1>Hello Guys</h1><br><p>verification from .. system</p><br><a href='http://localhost:3000/show'>click me</a>"

};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    res.status(200).send({msg:"Email sent to above email address please verify"});
  }
})
    librarian.save().then(()=> {
        res.status(200).send({msg:"Email sent to above email address please verify"});
        console.log("insert");
    });
    
}

exports.signin = async (req,res) =>{
   console.log("inside signin controller");
   var user = await Librarian.findOne({ email: req.body.email })
   if (!user) {
    console.log("Inside email")
   // alert("Account does not exists");
      return res.status(404).send({msg:"Invalid email address."})
   }
   if (!PasswordHash.verify(req.body.password, user.password)) {
    console.log("Inside password");
       return res.status(404).send({msg:"Invalid password"})
   }
   var token = new Token({ userId: user._id })
   token = await token.save()

   res.header("authorization", token._id)
   res.status(200).send(user)
   console.log("Signin Success");
}


exports.reset = async (req,res)=>{
    console.log("inside reset");
    var user = await Librarian.findOne({ email: req.body.email })
    if (!user) {
      return res.status(404).send({ message: "Account does not exists" })
  }
  if (!PasswordHash.verify(req.body.password, user.password)) {
      return res.status(403).send({ message: "Invalid password" })
  }
  var newpassword = req.body.newpassword;
  var query = {email: req.body.email};
  var newpassword = {
   password:PasswordHash.generate(newpassword)
  };
  Librarian.updateOne(query, newpassword, function(err, obj) {
   if (err) throw err;
   res.status(200).send("Document updated successfully");
   console.log("1 document updated");
 });
   
}

exports.signout = async (req, res) => {
  // Remove token from database
  var token = await Token.findByIdAndRemove(req.token._id)
  console.log(token)
  res.status(200).send({ message: "Signout success" })
}
