const { Router } = require("express");
const router = Router();

const { getAll, post } = require("../controllers/waterTankHistory.controller");

router.get("/waterTank/history", getAll);
router.post("/waterTank/history", post);

module.exports = router;
