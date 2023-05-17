const mongoose = require("mongoose")
const connectDB = async() => {
    try{
        const connection = mongoose.connect(process.env.MONGO_URI)
        console.log("mongoDB connected")
    }catch (err){
        console.log(err)
    }
}
module.exports = connectDB