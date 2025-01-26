const { default: mongoose } = require("mongoose");

exports.dbconnect=()=>{
    mongoose.connect("mongodb+srv://Yakshrajsinh:OQaoyvX8uQMhAore@crud.qu43a.mongodb.net/Blog")
.then(()=>{
    console.log("db connected👻");
 }).catch((error)=>{
    console.log(error);
 })
}