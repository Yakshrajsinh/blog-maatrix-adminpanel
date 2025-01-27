const Blog = require("../Models/blogModels")

exports.Store = async (req, res) => {
 try {
       console.log(req.file.fieldname);
       const { blog_title, blog_category, blog_author, blog_content, blog_date, blog_desc } = req.body
   
       const existTitle = await Blog.findOne({ blog_title }).countDocuments()
       // console.log('existTitle: ', existTitle);
   
       if (existTitle > 0) {
           res.json("Blog already exists")
       } else {
           await Blog.create({
               blog_title, blog_category, blog_author, blog_content, blog_date, blog_desc,blog_image:req?.file?.filename
           })
           res.redirect("/viewBlog")
       }
 } catch (error) {
    console.log(error);
 }
}

exports.trash=async(req,res)=>{
try {
    const {id}=req.params
    await Blog.findByIdAndDelete(id)
    res.redirect("/viewBlog")
} catch (error) {
    console.log(error);
}
}

exports.update=async(req,res)=>{
 try {
       const {id}= req.params    
       console.log('id: ', id);
       const { blog_title, blog_category, blog_author, blog_content, blog_date, blog_desc } = req.body
       console.log('req.body: ', req.body);
       await Blog.findByIdAndUpdate(
           {_id:id},
           {
               blog_title, blog_category, blog_author, blog_content, blog_date, blog_desc,blog_image:req?.file?.filename
           }
       )
       res.redirect("/viewBlog")
 } catch (error) {
    console.log(error); 
 }
}