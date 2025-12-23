const express = require("express")
const app = express()
const cors = require("cors")
const port = 5000;
const mongoose = require("mongoose")
require("dotenv").config()


mongoose.connect("mongodb://127.0.0.1:27017/todoapp").then(()=>{
    console.log("Connect successfully")
}).catch((err)=>{
    console.log("Not connected successfully" + err);
})

const authRoute = require("./routes/auth")
const taskRoute = require("./routes/task")


app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use("/auth", authRoute)
app.use("/tasks", taskRoute)

app.listen(port, (req,res)=>{
    console.log(`Server listing at port `+ port)
})
