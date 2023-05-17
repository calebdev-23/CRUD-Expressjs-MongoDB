const express = require('express')
const dotenv = require("dotenv").config()
const app = express()
const port = process.env.PORT || 3000
const mongoose = require("mongoose")
const Task = require("./models/taskModel");
const taskRoute = require("./routes/taskRoute")
app.use(express.json())
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("mongoDB connected")
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
    app.get("/",(req, res)=>{
        res.send("hello word")
    })
app.use(taskRoute)



