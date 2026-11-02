const LifeStyle = require("../Model/lifestyleSchema")

async function getLifeStyle (id) {

 const response = await LifeStyle.findOne({
        userId:id
    })

    return response

    
}

module.exports ={getLifeStyle}