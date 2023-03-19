const waterTankHistoryController = {};
const waterTankHistoryModel = require("../models/waterTankHistory");

waterTankHistoryController.getAll = async (req, res) => {
  let history = await waterTankHistoryModel.find();
  res.send({ data: history });
};

waterTankHistoryController.post = async (req, res) => {
  const {
    totalCapacity,
    liters,
    cubicCentimeter,
    milliliter,
    porcent,
  } = req.body;
  let newRecord = new waterTankHistoryModel({
    totalCapacity,
    liters,
    cubicCentimeter,
    milliliter,
    porcent,
  });
  newRecord = await newRecord.save();
  res.send(newRecord);
};

module.exports = waterTankHistoryController;
