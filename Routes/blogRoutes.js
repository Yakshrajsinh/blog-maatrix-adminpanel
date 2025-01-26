const blogController=require("../Controllers/blogController")
const upload = require("../middlewere/fileUpload")
const route=require('express').Router()

route.post("/",upload.single('blog_image'),blogController.Store)
route.get("/:id",blogController.trash)
route.post("/:id",upload.single("blog_image"),blogController.update)
module.exports=route