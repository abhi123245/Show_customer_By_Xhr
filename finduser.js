const express = require("express");
var ex = express();
const Form1= require("../schema/Form");
const bodyparser = require("body-Parser");
var router = express.Router();
router.use(bodyparser.json())
router.route("/")
.get(async (req,res)=>
{
    if(req.session[ 'user' ]!=null){
    
   var id = req.session.user.agent_id;
   console.log(id);
   await Form1.user1.find({lead_id:id},function(err,docs){

    })
    .then((data)=>
    {

res.render("main",{data,data});
    })
    }
    else{
        res.send("you are not login plzz first login");
    }
})
.post(async (req,res)=>
{

})
module.exports=router;