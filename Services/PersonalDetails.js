const PerDetails = require("../Model/PersonalDetailsSchema");

async function personalDetails(props) {
  const { userId, fullname, dateOfBirth, phoneNumber, gender, city } = props;

  const response = await PerDetails.create({
    userId: userId,
    fullname: fullname,
    dateOfBirth: dateOfBirth,
    phoneNumber: phoneNumber,
    gender: gender,
    city: city,
  });
  return response
}


module.exports = {personalDetails}
