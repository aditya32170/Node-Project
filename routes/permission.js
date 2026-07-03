const express = require("express");
const router = express.Router();

const permissionController = require("../controller/permission");

router.post("/create", permissionController.createPermission);

module.exports = router;