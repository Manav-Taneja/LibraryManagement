// const express = require("express")
// const router = express.Router()
//const bodyParser = require('body-parser');
//var urlendcodedParser = bodyParser.urlencoded({extended:false})
module.exports = (app) => {
    const studentController = require('../controllers/studentController')
    
    app.post('/student/add', studentController.add);
    
    app.get('/student/delete/:id', studentController.delete);
    
    app.put('/student/update/:id', studentController.update);
    
    app.get("/student/listall", studentController.listall);

    //app.post("/student/issuedBooks/:id",studentController.issuedBook);
    app.get('/student/data',studentController.data);

}
    