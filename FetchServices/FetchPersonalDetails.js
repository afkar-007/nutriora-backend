
const PerDetails = require('../Model/PersonalDetailsSchema')

async function getPersonalDetails(id) {

    const response = await PerDetails.findOne({
        userId:id
    })

    return response
    
}

module.exports= {getPersonalDetails}