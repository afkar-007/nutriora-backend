
const BodyMeasurement = require("../Model/BodyMeasurmentsSchema")

async function getBodyMeasurements (id) {

 const response = await BodyMeasurement.findOne({
        userId:id
    })

    return response

    
}

module.exports ={getBodyMeasurements}