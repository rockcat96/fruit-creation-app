require("dotenv").config() //Load env variables
const express = require("express") //Bring in express to make our app
const morgan = require("morgan") //Nice logger for our report
const methodOverride = require("method-override") //Allows use to override post request from our ejs/forms
const port = process.env.PORT
const app = express()
const FruitRouter = require("./controllers/fruit")

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("dev")) //logging
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.use(morgan("tiny")) //logging
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})) // parse urlencoded request bodies
app.use(express.static("public")) // serve files from public statically //send css and js files to frontend
app.use('/fruits', FruitRouter)



app.listen(port, ()=> {
    console.log(`Port is listening on ${port}`)
})
