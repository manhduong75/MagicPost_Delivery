const express = require("express");
const router = express.Router();

const {
  createPoint,
  getPoint,
  getAllPoint,
} = require("../controller/pointController");

router.post("/create-point", createPoint);
router.get("/:id", getPoint);
router.get("/", getAllPoint);

module.exports = router;
