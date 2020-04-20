const mongoose = require('mongoose');
const Student = mongoose.Schema({
    name :{type : String ,required:true},
    roll_no :{type : String ,required:true},
    branch:{type : String ,required:true},
    mobile_no :{type : Number ,required:true},
})
module.exports = mongoose.model("Student", Student)