const express = require("express");
const router = express.Router();

const { register, login, me } = require("../controllers/auth.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role");

router.post("/register", authenticate, authorize("admin"), register);
router.post("/login", login);
router.get("/me", authenticate, me);

module.exports = router;

