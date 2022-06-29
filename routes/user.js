const express = require("express");
const bcrypt = require("bcrypt");
const router = new express.Router();
const User = require("../models/Register");

router.post("/register", async(req, res)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            password: hash
        });

        await newUser.save();
        res.status(200).send("New user has been created");
    }
    catch(err){
        res.status(400).send(err);
        console.log(err);
    }
});

router.post("/login", async(req, res)=>{
    try{

        const user = await User.findOne({username: req.body.username})
        if(!user) return res.status(400).send("invalid username or password");

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect)
            return res.status(400).send("invalid username or password");
        

        res.status(200).send("login success");

    }
    catch(err){
        res.status(400).send(err)
        console.log(err);
    }
})

module.exports = router;