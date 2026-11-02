const BodyMeasurement = require("../Model/BodyMeasurmentsSchema");

async function BodyMeasurementPost(props) {
    console.log(props);
  const {
    userId,
    height,
    currentWeight,
    targetWeight,
    occupation,
    activityLevel,
  } = props;
  
  

  const response = await BodyMeasurement.create({
    userId: userId,
    height: height,
    currentWeight: currentWeight,
    targetWeight: targetWeight,
    occupation: occupation,
    activityLevel: activityLevel,
  });

  return response

}


module.exports={BodyMeasurementPost}