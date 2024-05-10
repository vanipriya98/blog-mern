const express = require("express")
const {getAllBlogsController,createBlogsController,getBlogByIdContainer,deleteBlogContainer,updateBlogContainer} =require("../controllers/blogController")
// router object
const router = express.Router()

//routes

// create blog || post 
router.post("/create-blog", createBlogsController)

// get blog by id
router.get("/get-blog/:id " ,getBlogByIdContainer)

//get all blogs
router.get("/all-blogs", getAllBlogsController)


// update blog
router.put("/update-blog/:id", updateBlogContainer)



//delete blog
router.delete("/delete-blog/:id", deleteBlogContainer)


module.exports = router