const express = require("express");
const router = express.Router ();

const matchController = require("../controllers/match.controller");
const validate = require("../middlewares/validate.middleware");
const { authenticate } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role");

router.post("/", authenticate, authorize("admin", "commissaire" ),validate, matchController.createMatch);
router.get("/", authenticate, matchController.getAllMatchs);
router.get("/:id",  authenticate, matchController.getMatchById);
router.put("/:id", authenticate, authorize("admin","commissaire"), validate, matchController.updateMatch);
router.delete("/:id",  authenticate, authorize("admin"),matchController.deleteMatch);
router.get("/:id/arbitres", authenticate, matchController.getMatchArbitres);

module.exports = router;