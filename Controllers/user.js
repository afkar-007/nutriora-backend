const {
  userPost,
  userLogin,
  changeProfileComplete,
  GetUsers,
  hasDietPlanChange,
  getOneUser,
} = require("../Services/UserService");

const PostUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await userPost(name, email, password);

    res.status(201).json({
      message: "Registered Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const login = await userLogin(email, password);

    res.status(200).json({
      profile: login.profile,
      message: login.message,
      token: login.token,
      role: login.role,
      userId: login.userId,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const changeProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const { profileCompleted } = req.body;

    const response = await changeProfileComplete(id, profileCompleted);

    res.status(201).json({
      message: "profile Completed Change Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const fetchUsers = async (req, res) => {
  try {
    const response = await GetUsers();

    res.status(200).json({
      message: "Users fetched Sucessfully",

      data: response,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const ChangeHasDietPlan = async (req, res) => {
  try {
    const { id } = req.params;

    const { hasDietPlans } = req.body;

    const response = await hasDietPlanChange(id, hasDietPlans);

    res.status(201).json({
      message: "Has Diet Plan Change Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const fetchOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getOneUser(id);

    res.status(200).json({
      message: "Fetch Current user SuccessFully",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  PostUser,
  loginUser,
  changeProfile,
  fetchUsers,
  ChangeHasDietPlan,
  fetchOneUser
};
