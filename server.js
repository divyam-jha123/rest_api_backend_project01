require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./routes/user")
const user = require('./models/user');


// middleware -> plugin
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connecting to mongoDb
const { connectMongoDb } = require("./connections/user.connect");
connectMongoDb("mongodb+srv://Users-data:tHntJjIQraf4fGfv@cluster0.jlljftx.mongodb.net/USER-API?appName=Cluster0")


app.use("/user" , userRouter)

app.listen(port , (err) => console.log(`server is runing at ${port}`))