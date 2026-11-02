const NutritionGoals = require('../Model/NutritionGoalsSchema')

async function getNutritionGoals(id) {

    const response = await NutritionGoals.findOne({
        userId:id
    })

    return response
    
}

module.exports= {getNutritionGoals}