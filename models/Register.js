const mongoose = require("mongoose");

//schema
const UserScema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},
{timestamps: true});

//collection creation
const User = new mongoose.model("User", UserScema);
module.exports = User;