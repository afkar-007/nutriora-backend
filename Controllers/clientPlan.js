const { DietPlanPost, DietPlanEdit } = require("../Services/DietPlan");
const {
  getDietPlan,
  getOneDietPlan,
  getDietPlanOne,
} = require("../FetchServices/FetchDietPlans");

const postDietPlan = async (req, res) => {
  try {
    const { clientId, days, endDate, startDate, title } = req.body;

    const props = {
      clientId: clientId,
      days: days,
      endDate: endDate,
      startDate: startDate,
      title: title,
    };

    const response = await DietPlanPost(props);

    res.status(200).json({
      message: "Diet Plan Created Successfully",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const DietPlanGet = async (req, res) => {
  try {
    const response = await getDietPlan();

    res.status(200).json({
      message: "Diet Plan Fetched Successfully",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const oneDietPlanGet = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getOneDietPlan(id);

    res.status(200).json({
      message: "User Diet Plan Fetched Successfully",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const EditDietPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await DietPlanEdit(id);

    res.status(200).json({
      message: "Diet Plan Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const fetchDietPlanOne = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await getDietPlanOne(id);

    res.status(200).json({
      message: "Client Diet plan fetched Successfully",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const ChangeIsCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const response = await DietPlanEdit(id, status);

    res.status(200).json({
      message: "DietPlan Update Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  postDietPlan,
  DietPlanGet,
  oneDietPlanGet,
  EditDietPlan,
  fetchDietPlanOne,
  ChangeIsCompleted
};
