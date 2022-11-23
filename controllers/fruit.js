//////////////////////////////////////////
//Import Dependencies
//////////////////////////////////////////

const express = require("express")
const Fruit = require("../models/fruit")

//////////////////////////////////////////
//Create Router Variable to attach routes
//////////////////////////////////////////
const router = express.Router() //router will HAVE ALL ROUTES ATTACHED TO IT    

//////////////////////////////////////////
//Actual routes
//////////////////////////////////////////

//command d allows us to select all "app" at the same time to update them to "router"


// router.get("/", (req, res) => {
//     res.send("your server is running...better catch it.")
// })

// index route
router.get("/", async (req, res) => {
    const fruits = await Fruit.find({});
    res.render("fruits/index.ejs", { fruits });
  });
 
// create route
router.post("/", (req, res) => {
    req.body.readyToEat = req.body.readyToEat === "on" ? true:false
    Fruit.create(req.body, (err, fruit) => {
        res.redirect("/fruits")
    })
})

// new route
router.get("/new", (req, res) => {
    res.render("fruits/new.ejs")
})

//edit route
router.get("/:id/edit", (req,res) => {

    const id = req.params.id

    Fruit.findById(id, (err, fruit) => {
        // res.json(fruit)
        //we don't need ./because ejs already knows to look inside of the views folder 
        res.render("fruits/edit.ejs", {fruit})
    })

})

//router.put

router.put("/:id", (req,res) => {
    
    //get the id from params
    const id = req.params.id

    //check if the readyToEat property should be true or false
    req.body.readyToEat = req.body.readyToEat === "on" ? true:false
    
    //update the fruit
    Fruit.findByIdAndUpdate(id, req.body,{new: true}, (err, fruit) => {
        //new: true just updates the value of the fruit used in the callback function
        //redirects user back to the main page when the fruit has been updated
        res.redirect(`/fruits/${id}`)
    })

})


// show route
router.get("/:id", (req, res) => {
    //go and get fruit from the database
    Fruit.findById(req.params.id)
    .then((fruit) => {
        res.render('fruits/show.ejs', {fruit})
    })
})

//delete route
router.delete("/:id", (req,res) => {

    Fruit.findByIdAndDelete(req.params.id,(err,deletedFruit)=> {
        console.log(err, deletedFruit)
        res.redirect("/fruits")
    })
})


//////////////////////////////////////////
//Export the router
//////////////////////////////////////////
module.exports = router