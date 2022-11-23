///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require("./connection")
const Fruit = require("./fruit")

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

// Make sure code is not run till connected
mongoose.connection.on("open", () => {

//seed code

    // array of starter fruits
    const startFruits = [
          { name: "Orange", color: "orange", readyToEat: false },
          { name: "Grape", color: "purple", readyToEat: false },
          { name: "Banana", color: "orange", readyToEat: false },
          { name: "Strawberry", color: "red", readyToEat: false },
          { name: "Coconut", color: "brown", readyToEat: true },
        ]

    
    // Delete all fruits
    Fruit.deleteMany({}, (err, data) => {
        // Seed Starter Fruits
        Fruit.create(startFruits,(err, data) => {
            // send created fruits as response to confirm creation
            console.log(data);
          }
        );
      });
})