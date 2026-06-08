const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/controllerUsers");

router.get("/users", ctrl.listarUsers);
router.post("/user", ctrl.cadastrarUser);

module.exports = router;