const express = require("express")
const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "title is required"]
    },
    image: {
        type: String,
        require: [true, "image is required"]
    },
    description: {
        type: String,
        require: [true, "description is required"]
    },
})

const blogModel = new mongoose.model("Blog", blogSchema)

module.exports = blogModel