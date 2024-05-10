const userModel = require("../models/User")
const bcrpyt = require("bcrypt")

// create registered user
exports.registerControllers = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(401).send({
                message: "required all fileds",

            })
        }
        const existUser = await userModel.findOne({ email })
        if (existUser) {
            return res.send("User already exists")
        }
        const hashedpassword = await bcrpyt.hash(password, 10)


        const newUser = new userModel({
            name, email, password: hashedpassword
        })
        await newUser.save()
        return res.status(200).send({
            message: "User created successfully",
            newUser
        })

    }
    catch (err) {
        console.log(err)
        return res.status(500).send({
            err
        })
    }
}

// get all users
exports.getAllUsers = async (req, res) => {
    const users = await userModel.find({})
    return res.status(200).send({
        message: "success",
        users
    })

}



//login
exports.loginController = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).send({
            message: "All fileds required"
        })
    }
    const existUser = await userModel.findOne({ email })
    if (!existUser) {
        return res.status(400).send({
            message: "User not exists"
        })
    }
    const isMatch = await bcrpyt.compare(password, existUser.password)
    if (!isMatch) {
        return res.status(400).send({
            "message": "Invalid password"
        })
    }
    return res.status(200).send({
        "message" :"user login successful",
        existUser
    })
}