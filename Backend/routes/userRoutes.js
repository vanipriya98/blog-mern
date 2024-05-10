
const express = require("express")
const { getAllUsers, registerControllers, loginController } = require("../controllers/userController")
// router object
const router = express.Router()

// get all users || get
router.get("/allusers", getAllUsers)

// create  user|| post
router.post("/register", registerControllers)

// login || post
router.post("/login", loginController)
module.exports = router