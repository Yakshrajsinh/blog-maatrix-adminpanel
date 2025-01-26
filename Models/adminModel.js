const { Schema, model } = require("mongoose");

const common={
    trim:true,
    require:true,
    type:String,
    unique:true
}

const adminSchema= new Schema({
    username:common,
    password:{
        ...common,
        unique:false
    },
    admin_profile:String,
    email:common
})

const Admin=model('Admin',adminSchema)
module.exports=Admin