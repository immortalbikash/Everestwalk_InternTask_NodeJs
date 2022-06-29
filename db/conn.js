const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/everestwalk")
.then(()=> console.log("Database connection sucessful"))
.catch((err)=>console.log(err));