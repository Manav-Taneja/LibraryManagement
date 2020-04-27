const mongoose = require('mongoose');
const Student = mongoose.Schema({
    name :{type : String ,required:true},
    roll_no :{type : String ,required:true},
    branch:{type : String ,required:true},
    books :{type : Number ,required:true},
   // orders: [{ type: Schema.Types.ObjectId, ref: 'IssuedBooks', required: true }]
})
module.exports = mongoose.model("Student", Student)