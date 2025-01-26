const admin = require("../Controllers/adminController")
const upload = require("../middlewere/fileUpload")

const route=require("express").Router()

route.post("/register",admin.register)
route.post("/login",admin.login)
route.post("/updateProfile",upload.single("admin_profile"),admin.updateProfile)

module.exports=route