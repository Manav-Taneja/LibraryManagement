const Book = require('../models/Books')
function data(){
    console.log("inside data");
    // var query = { quantity : {$gt:10} };
     Book.find( { quantity : {$gt:1} },{quantity:1,_id:0,name:1}).lean().exec(function(err, quantityarr) {
       if (err) throw err;
       console.log(quantityarr);
       var x;
       var valuearr=[];
       var namearr=[];
       var i=0;
       for(x in quantityarr){
        // console.log(quantityarr[x].quantity);
        // console.log(quantityarr[x].name);
         valuearr[i]=quantityarr[x].quantity;
         namearr[i]=quantityarr[x].name
         i++;
       }
       console.log(valuearr);
       console.log(namearr);
     });
     return quantityarr;
}