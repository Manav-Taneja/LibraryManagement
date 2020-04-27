const mongoose = require('mongoose');

const Loan =  mongoose.Schema({
   book:{type:mongoose.Schema.Types.ObjectId, ref:'Book'},
   //name:{type:String,required:true},
   student:{type:mongoose.Schema.Types.ObjectId, ref:'Student'},
   issuedDate : {type: Date}
})

module.exports = mongoose.model("Loan", Loan)