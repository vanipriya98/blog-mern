const blogModel = require("../models/blogModel")

// create blog
exports.createBlogsController = async (req, res) => {
    try {
        const { title, image, description } = req.body
        if (!title || !image || !description) {
            return res.status(400).send("ALL Fields required")
        }
        const newBlog = new blogModel({
            title, image, description
        })
        await newBlog.save()
        return res.send({
            message: "Blog created",
            newBlog

        })
    } catch (err) {
        console.log(err)
        return res.send({
            message: "Internal server error",
            err
        })
    }


}

// get blog by id 

exports.getBlogByIdContainer = async(req,res) => {
 try{

 }
 catch(err){
    console.log(err)
 }
}

// get all blogs
exports.getAllBlogsController = async (req, res) => {
    try {
        const blogs = await blogModel.find({})
        if (!blogs) {
            return res.status(400).send({
                success: false,
                message: "No blogs"
            })
        }
        return res.send({
            success: true,
            BlogsCount: blogs.length,
            blogs

        })
    }
    catch (err) {
        console.log(err)
        return res.send({
            message: "Internal server error",
            err
        })
    }

}

// update blog
exports.updateBlogContainer = async (req, res) => {
   try{
    const { id } = req.params
    const { title, image, description } = req.body
    // if (  !title || !image|| !description ) {
    //     return res.send({
    //       message: 'Send all required fields'
    //     });
    // }
    const blog = await blogModel.findByIdAndUpdate(id  , req.body ,{new :true})
    if (!blog) {
        return response.status(404).json({ message: 'Blog not found' });
      }
    return res.send({
        message : "Blog Updated",
        blog
    })
   }
   catch(err){
    console.log(err)
        return res.send({
            message: "Internal server error",
            err
        })
   }
    
}


// delete blog
exports.deleteBlogContainer = () => {

}