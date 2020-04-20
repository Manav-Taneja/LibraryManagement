// const express = require("express")
// const router = express.Router()
//const bodyParser = require('body-parser');
//var urlendcodedParser = bodyParser.urlencoded({extended:false})
module.exports = (app) => {
    const studentController = require('../controllers/studentController')
    
    app.post('/student/add', studentController.add);
    
    app.delete('/student/delete/:id', studentController.delete);
    
    app.put('/student/update/:id', studentController.update);
    
    app.get("/student/listall", studentController.listall);
    }
    