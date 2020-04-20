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

exports.signout = async (req,res) =>{
  console.log("inside signout");
  var token = await Token.findByIdAndDelete(req.token._id)
  console.log(token)
  res.status(200).send({ message: "Signout success" })

}