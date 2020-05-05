module.exports = (app) => {
    const librarianController = require('../controllers/librarianController')
    const auth = require('../middlewares/auth.js')
    app.post('/librarian/signin',librarianController.signin);
    
    app.post('/librarian/signup', librarianController.signup);
    
    app.post('/librarian/signout', auth, librarianController.signout);

    app.post('/librarian/reset',librarianController.reset);
    
 }