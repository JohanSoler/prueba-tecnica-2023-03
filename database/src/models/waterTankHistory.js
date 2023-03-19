const { Schema, model } = require("mongoose");

const waterTankHistory = new Schema(
  {
    totalCapacity: String,
    liters: String,
    cubicCentimeter: String,
    milliliter: String,
    porcent: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("WaterTankHistory", waterTankHistory, "history");
