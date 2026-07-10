const express = require("express");
const router = express.Router();

const affectationController = require("../controllers/affectation.controller");
const validate = require("../middlewares/validate.middleware");
const { authenticate } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role");

router.post("/", authenticate, authorize("admin", "commissaire"),validate, affectationController.createAffectation);
router.get("/",authenticate, affectationController.getAllAffectations);
router.get("/:id", authenticate, affectationController.getAffectationById);
router.put("/:id", authenticate,authorize("admin", "commissaire"), validate, affectationController.updateAffectation);
router.delete("/:id", authenticate, authorize("admin"), affectationController.deleteAffectation);

module.exports = router;