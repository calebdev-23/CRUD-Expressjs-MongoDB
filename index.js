const express = require('express')
const dotenv = require("dotenv").config()
const cors = require("cors");
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 3000
const mongoose = require("mongoose")
const Task = require("./models/taskModel");
const taskRoute = require("./routes/taskRoute")


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



