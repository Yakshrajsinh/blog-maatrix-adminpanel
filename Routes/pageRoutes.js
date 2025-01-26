const route= require("express").Router()
const Admin = require("../Models/adminModel")
const Blog = require('../Models/blogModels')
const { accessPage } = require("../utils/accesspage")

route.get('/',(req,res)=>{
    // res.render('../views/pages/index')
    accessPage(req,res,"pages/index")
})

route.get('/addBlog',(req,res)=>{
    // res.render('../views/pages/addBlog')
    accessPage(req,res,"pages/addBlog")
})

route.get("/viewBlog",async(req,res)=>{
    const Blogs= await Blog.find()
    res.render("../views/pages/viewBlog",{
        Blogs
    })
})

route.get("/updateBlog",async(req,res)=>{
    const {id}= req.query
    const blogs=await Blog.findById(id)
    res.render("../views/pages/updateBlog",{
        blogs
    })
})

route.get('/register',(req,res)=>{
    res.render("pages/register")
})
route.get('/login',(req,res)=>{
    res.render("pages/login")
})
route.get("/logout",(req,res)=>{
    res.clearCookie('admin')
    res.redirect('/login')
})
route.get("/myProfile",async(req,res)=>{
    const cookieadmin= req.cookies.admin
    // console.log('cookieadmin: ', cookieadmin);
    const email= cookieadmin.email
    const singleAdmin= await Admin.findOne({email})
    // console.log('singleAdmin: ', singleAdmin);
    res.render("pages/myProfile",{
        admin:singleAdmin
    })
})

module.exports=route