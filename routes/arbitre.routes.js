const express = require("express");
const router = express.Router();

const arbitreController = require("../controllers/arbitre.controller"); 
const  validate  = require("../middlewares/validate.middleware");
const { authenticate } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role");




router.post("/",authenticate,authorize("admin"),validate, arbitreController.createArbitre);
router.get("/",  authenticate, arbitreController.getAllArbitres);
router.get("/:id", authenticate, arbitreController.getArbitreById);
router.put("/:id", authenticate, authorize("admin") , validate, arbitreController.updateArbitre);
router.delete("/:id", authenticate, authorize("admin") ,arbitreController.deleteArbitre);
router.get("/:id/matchs", authenticate, arbitreController.getArbitreMatchs);

module.exports = router;
