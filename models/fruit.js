////////////////////////////////////////////////
// Fruit Model
////////////////////////////////////////////////
const mongoose = require("./connection") //connect to the mongoose that's already connected to the database

const {Schema, model} = mongoose // destructuring, grabbing model and Schema off mongoose variable
// mongoose.Schema
// mongoose.model

// make fruits schema
const fruitsSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean
})

// make fruit model
const Fruit = model("Fruit", fruitsSchema)

module.exports = Fruit