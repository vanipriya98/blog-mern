const express =require('express')
const router=require("Router")
const User=require("../models/User")
const bcrypt =require("bcrypt")
const jwt =require("jsonwebtoken")



router.post("/register", async(req,res)=>{
    try{
     const {username ,email,password}=req.body
     if(!username || !email || !password){
        res.status(403).send("all fields are required ")
     }
     const newUser= new User({
        username,email,password
     })
     await newUser.save()
     res.status(200).send("User registered successfully")
    }
    catch(err){
      console.log(err)
      res.status(500).send(err)
    }
})

router.post("/login" ,async(req,res)=>{
    try{
     const {email ,password} =req.body
     const emailExist=await User.findOne({email})
     if(!emailExist){
        return res.status(401).send("user exist")
     }
     if(!password === emailExist.password){
        return res.status(403).send("Invalid password")
     }
     const payload = {
        user: {
            id: exist.id
        }
    };
    jwt.sign(payload, 'jwtPassword', { expiresIn: 3600000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
    });
    }
    catch(err){
      console.log(err)
      return res.status(500).send(err)
    }
})

router.get("/logout",async(req,res)=>{
   
})