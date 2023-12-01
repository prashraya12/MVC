const express = require("express");
//make sure R in capital of Router
const { createEmployeeCtrl,  fetchAllEmployeeCtrl,
    fetchCertainEmployeeCtrl,
    updateCertainEmployeeCtrl,
    delteCertainEmployeeCtrl } = require("../controller/employeeCtrl");

const router = express.Router(); 

//create employee
router.post("/", createEmployeeCtrl);

// update the employee

router.put("/:id", updateCertainEmployeeCtrl)

//delete the employee

router.delete("/:id", delteCertainEmployeeCtrl )

//fetch all employee
router.get("/", fetchAllEmployeeCtrl)

//fetched certain employee
router.get("/:id", fetchCertainEmployeeCtrl);

module.exports = router;