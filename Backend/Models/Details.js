const mongoose=require('mongoose');
const Detailmodel=mongoose.model("Detail", new mongoose.Schema({
    Name:{type:String,require:true},
    Social:{type:String,require:true},
    Email:{type:String,require:true},
    Password:{type:String,require:true},
    UserName:{type:String,require:true},
    Token:{type:String,require:true},
}))

module.exports=Detailmodel;