const mongoose =require('mongoose');
const userloginmodel=mongoose.model("UserLogin", new mongoose.Schema({
    Username:{type:String,require:true},
    Userpassword:{type:String,require:true},
}))
module.exports=userloginmodel;