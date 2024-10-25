const express=require('express')
const cors=require('cors');

const server=express();
const mongoose=require('mongoose');
const Detailmodel = require('./Models/Details');
const userloginmodel = require('./Models/Ulogin');

const res=mongoose.connect("mongodb://127.0.0.1:27017/credentail");
res.then(()=>{
    console.log("connected")
})
res.catch(()=>{
    console.log("fail")
})
server.use(cors());
server.use(express.json())

server.get("/details",async(req,res)=>{
    const re=await Detailmodel.find();
    res.json(re);
});
server.post("/details",async(req,res)=>{
    const re=new Detailmodel({
        Name:req.body.name,
        Social:req.body.social,
        Email:req.body.email,
        Password:req.body.password,
        UserName:req.body.username,

        Token:req.body.token,
    })
    await re.save();
    res.json({msg:"Detail Save"})
});
server.get("/details/:id",async(req,res)=>{
    const re=await Detailmodel.find({_id:req.params.id});
    res.json(re);
});
server.put("/details",async(req,res)=>{
    const re=await Detailmodel.findOneAndUpdate({_id:req.body.id},{Name:req.body.Name,Social:req.body.Social,Email:req.body.Email,Password:req.body.Password})
    re.save();
    res.json({msg:"Details Updated"})
});
server.delete("/details",async(req,res)=>{
    const re=await Detailmodel.findOneAndDelete({_id:req.body.id})
    res.json(re)
});
server.patch("/details",async(req,res)=>{
    const re=await Detailmodel.find({
        UserName:req.body.UserName,
        Token:req.body.Token
    })
    res.json(re)
  
});
// server.get("/Usersignup",async(req,res)=>{
//     const re=await userloginmodel.find();
//     res.json(re);
// });
server.post("/Usersignup",async(req,res)=>{
    const re= new userloginmodel({
        Username:req.body.username,
        Userpassword:req.body.userpassword,
    })
    await re.save()
    res.json({msg:"Account Created Successfully"})
})
server.patch("/Userlogin",async(req,res)=>{
    const re= await userloginmodel.find({
        Username:req.body.username,
        Userpassword:req.body.userpassword,
    })
   if(re.length>0){
    res.json({msg:"Valid User"})
   }else{
    res.json({msg:"InValid User"})
   }
})
server.listen(7000,()=>{
    console.log("server created")
});