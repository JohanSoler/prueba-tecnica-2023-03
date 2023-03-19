const { Router } = require("express");
const router = Router();

const {
  getAll,
  post,
  deleteAll,
} = require("../controllers/waterTankHistory.controller");

router.get("/waterTank/history", getAll);
router.post("/waterTank/history", post);
router.delete("/waterTank/history", deleteAll);

module.exports = router;
