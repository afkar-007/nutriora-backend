const {
  createHealthPlan,
  getHealthPlan,
  getOneHealthPlan,
  DeleteHealthPlan,
  ClientHealthPlan,
  UpdateClientPlan,
} = require("../Services/HealthPlan");

const postHealthPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const { overview, fruits, vegetables, guidelines, exercises } = req.body;

    const data = {
      clientId: id,
      overview: overview,
      fruits: fruits,
      vegetables: vegetables,
      guidelines: guidelines,
      exercises: exercises,
    };

    const response = await createHealthPlan(data);

    res.status(200).json({
      message: "Health Plan created Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const fetchAllHealthPlan = async (req, res) => {
  try {
    const response = await getHealthPlan();

    res.status(200).json({
      message: " All Health Plans fetched Successfully",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const fetchOneHealthPlan = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await getOneHealthPlan(id);

    if (!response) {
      return res.status(404).json({
        message: "Diet Plan not found",
      });
    }

    res.status(200).json({
      message: "One Health Plan fetched Successfully",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const removeOnePlan = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await DeleteHealthPlan(id);

    res.status(200).json({
      message: "Plan Deleted SuccessFully",
    });
  } catch (err) {
    (res.status(500),
      json({
        message: err.message,
      }));
  }
};

const fetchClientPlan = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await ClientHealthPlan(id);

    res.status(200).json({
      message: "Client workout plan fetched Successfully",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const clientPlanUpdate = async (req, res) => {
  try {
    const { id } = req.params;

    const { status } = req.body;

    const response = await UpdateClientPlan(id, status);

    res.status(200).json({
      message: "Workout Plan updated Successfully ",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  postHealthPlan,
  fetchAllHealthPlan,
  fetchOneHealthPlan,
  removeOnePlan,
  fetchClientPlan,
  clientPlanUpdate
};
