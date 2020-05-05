module.exports = (app) =>{
    const loan_controller=require("../controllers/loanController");
    const index = require("./indexRoutes")
    app.post('/issue',loan_controller.issue);
    app.get('/show',loan_controller.show);
    app.get('/issuebook',loan_controller.listall);
    app.get('/studentissue',loan_controller.listallstudent);
}