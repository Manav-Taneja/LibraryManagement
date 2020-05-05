const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const Handlebars = require('handlebars');
const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser')
var cors = require('cors');
const expressHandlebars= require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const app = express();
var url = "mongodb://localhost:27017/Book"; //LIVE DATABASE
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to database");
}).catch(() => {
  console.log("Error connecting to database");
});

//routes configration
require('./routes/bookRoutes')(app);
require('./routes/librarianRoutes')(app);
require('./routes/studentRoutes')(app);
require('./routes/indexRoutes')(app);

require('./routes/loanRoutes')(app);
//app.use("/api/book", bookroute)
//middleware
var urlendcodedParser = bodyParser.urlencoded({extended:false})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
 app.engine('hbs',expressHandlebars({
   extname:'hbs',
  defaultLayout:'layout',
   layoutsDir:__dirname + '/views/',
   handlebars: allowInsecurePrototypeAccess(Handlebars)
 }))

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
// const bookRouter = require('./routes/book.route');
// app.use('/',bookRouter);

const port = 3000;
app.listen(port,() => {
    console.log("Server Running on port"+" "+port);
});