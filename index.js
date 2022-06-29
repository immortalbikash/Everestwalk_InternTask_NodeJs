const express = require("express");
require('./db/conn');
const userRouter = require("./routes/user");

const app = express();
const PORT = 7000;

//middlewares
app.use(express.json());
app.use(userRouter);




app.listen(PORT, ()=>{
    console.log(`Listening to port number ${PORT}`);
});
