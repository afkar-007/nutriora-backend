const Users = require("../Model/Users")


async function getUser(id) {

    const response = await Users.findById(id).select("-password")

    return response
    
}


module.exports ={getUser}