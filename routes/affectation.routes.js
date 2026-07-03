const express = require("express");
const router = express.Router();

const validate = require("../middlewares/validate.middleware");
const affectationController = require("../controllers/affectation.controller");

router.post("/",validate, affectationController.createAffectation);
router.get("/", affectationController.getAllAffectations);
router.get("/:id", affectationController.getAffectationById);
router.put("/:id", validate, affectationController.updateAffectation);
router.delete("/:id", affectationController.deleteAffectation);

module.exports = router;