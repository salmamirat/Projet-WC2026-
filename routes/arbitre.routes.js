const express = require("express");
const router = express.Router();

const validate = require("../middlewares/validate.middleware");
const arbitreController = require("../controllers/arbitre.controller");

router.post("/", validate, arbitreController.createArbitre);
router.get("/", arbitreController.getAllArbitres);
router.get("/:id", arbitreController.getArbitreById);
router.put("/:id", validate, arbitreController.updateArbitre);
router.delete("/:id", arbitreController.deleteArbitre);
router.get("/:id/matchs", arbitreController.getArbitreMatchs);

module.exports = router;
