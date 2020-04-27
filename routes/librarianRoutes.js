module.exports = (app) => {
    const librarianController = require('../controllers/librarianController')
    const auth = require('../middlewares/auth.js')
    app.get('/librarian/signin', librarianController.signin);
    
    app.post('/librarian/signup', librarianController.signup);
    
    app.delete('/librarian/signout', auth, librarianController.signout);

    app.put('/librarian/reset',librarianController.reset);
    
 }