import Plan from "../models/Plan";

export const findAllPlans = async (req, res) => {
  try {
    const plansFounded = await Plan.find();
    res.json(plansFounded);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the plans",
    });
  }
};

export const createPlan = async (req, res) => {
  try {
    const {
      nombre,
      foto,
      desc,
      tipoPlan,
      cAutonoma,
      provincia,
      numCoches,
      costePlan,
    } = req.body;

    if (
      !nombre ||
      !foto ||
      !desc ||
      !tipoPlan ||
      !cAutonoma ||
      !provincia ||
      !numCoches ||
      !costePlan
    ) {
      return res.status(400).json({
        message:
          "Something in the body is missing: nombre, foto, desc, tipoPlan, cAutonoma, provincia, numcoches, costePlan",
      });
    }

    const newPlan = new Plan({
      nombre: nombre,
      foto: foto,
      desc: desc,
      tipoPlan: tipoPlan,
      cAutonoma: cAutonoma,
      provincia: provincia,
      numCoches: numCoches,
      costePlan: costePlan,
    });
    const planSaved = await newPlan.save();
    res.json(planSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong creating the plan",
    });
  }
};

export const findOnePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const planFounded = await Plan.findById(id);

    if (!planFounded)
      return res
        .status(404)
        .json({ message: `The plan with id: ${id} doesn't exists` });

    res.json(planFounded);
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong retrieving the plan",
    });
  }
};

export const deletePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const planDeleted = await Plan.findByIdAndDelete(id);
    res.json({
      message: `${planDeleted.nombre} ${id} plan were deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong deleting the plan",
    });
  }
};

export const updatePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedPlan = await Plan.findByIdAndUpdate(id, body);

    res.json({
      updatedPlan,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong updating the plan",
    });
  }
};
