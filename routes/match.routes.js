const express = require("express");
const router = express.Router ();

const validate = require("../middlewares/validate.middleware");
const matchController = require("../controllers/match.controller");

router.post("/",validate, matchController.createMatch);
router.get("/", matchController.getAllMatchs);
router.get("/:id", matchController.getMatchById);
router.put("/:id", validate, matchController.updateMatch);
router.delete("/:id", matchController.deleteMatch);
router.get("/:id/arbitres", matchController.getMatchArbitres);

module.exports = router;