const express = require("express");
const home = require("./api/home");
const findstaff = require("./api/findstaff");
const finduser = require("./api/finduser");
const session = require("express-session");
const mongo = require("mongoose");
const url1 ='mongodb://localhost:27017/bank';
const filestore = require("session-file-store")(session);
const bodyparser = require("body-parser");
const path = require("path");
const exhbs = require("express-handlebars");

const connect = mongo.connect(url1,{ useNewUrlParser: true }, (err,db)=>{
});
connect.then((db)=>
{
    console.log("connected to data base succesfuly");
});
ex = express();
ex.set('views',__dirname + '/layouts')
 ex.set('views',path.join(__dirname,'views'));
 ex.engine('handlebars',exhbs({defaultLayout:'home'}))
  ex.set('view engine','handlebars');





ex.use(bodyparser.json());
ex.use(bodyparser.urlencoded( { extended : true}));

ex.use(session({
  name :'session-id',
  secret : '123456789',
store : new filestore()
}));




ex.use("/home",home);
ex.use("/finduser",finduser);
ex.use("/findstaff",findstaff);
ex.use(express.static("./html"));
ex.get("/",(req,res,next)=>
{

})


var server = ex.listen(8002,function(){
    console.log("your server successful conected");
})