// const passport = require("../config/passport")
const admin = require("../Controllers/adminController")
const upload = require("../middlewere/fileUpload")
const passport = require('passport')

const route=require("express").Router()

route.post("/register",admin.register)
route.post("/login", passport.authenticate('local', { failureRedirect: '/login',successRedirect:'/' }))
route.post("/updateProfile",upload.single("admin_profile"),admin.updateProfile)

module.exports=route