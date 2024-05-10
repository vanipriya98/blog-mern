const express = require("express")
// rest object
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const colors = require("colors")
const morgan = require("morgan")
// const multer=require("multer")

// env config
dotenv.config()

// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// router import
const userRoutes = require("./routes/userRoutes")
const blogRoutes = require("./routes/blogRoutes")


app.get('/hello', async (req, res) => {
    try {
        res.status(200).send(
            { message: "Welcome" }
        )
    }
    catch (err) {
        console.log(err)
    }
})





mongoose.connect("mongodb+srv://vani:vani@cluster0.id6x4fj.mongodb.net/")
    .then(() => { console.log("DB Connected") })
    .catch(err => console.log(err));


//user routes
app.use("/api/v1/user", userRoutes)

//blog routes
app.use("/api/v1/user", blogRoutes)

// port 
const PORT = process.env.PORT || 8000

// listen
app.listen(8000, () => {
    // connectDB()
    console.log(`server running ${PORT}`)
})