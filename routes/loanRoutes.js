module.exports = (app) =>{
    const loan_controller=require("../controllers/loanController");
    app.post('/issue',loan_controller.issue);
    app.get('/show',loan_controller.show);
}