
const FoodHabits = require("../Model/FoodHabitsSchema")

async function getFoodHabits (id) {

 const response = await FoodHabits.findOne({
        userId:id
    })

    return response

    
}

module.exports ={getFoodHabits}