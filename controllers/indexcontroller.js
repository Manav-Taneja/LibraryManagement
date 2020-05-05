exports.dashboard = function (req,res){
    console.log ('Cookies: ', req.cookies);
    if (req.cookies.authorization){
      res.render('book',{});
    }
    else{
      res.status(404).send("no token provided");
    }
}