const LifeStyle = require("../Model/lifestyleSchema");

async function LifeStylePosting(props) {
  const {
    userId,
    sleepHours,
    sleepQuality,
    waterIntake,
    exerciseFrequency,
    medications,
    exerciseType,
    activityLevel,
    stressLevel,
    medicalConditions,
    digestiveIssues,
    smokingAlcohol,
    additionalNotes,
    eatingRoutine
  } = props;

  const response = await LifeStyle.create({
    userId: userId,
    sleepHours: sleepHours,
    sleepQuality: sleepQuality,
    waterIntake: waterIntake,
    exerciseFrequency: exerciseFrequency,
    medications: medications,
    exerciseType: exerciseType,
    activityLevel: activityLevel,
    stressLevel: stressLevel,
    medicalConditions: medicalConditions,
    digestiveIssues: digestiveIssues,
    smokingAlcohol: smokingAlcohol,
    additionalNotes: additionalNotes,
    eatingRoutine:eatingRoutine
  });

  return response;
}

module.exports={LifeStylePosting}