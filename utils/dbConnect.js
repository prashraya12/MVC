const mongoose = require("mongoose");

module.exports = mongoose

    .connect
    (
        "mongodb+srv://Prashraya:oversweet-essential@cluster0.cblu1tu.mongodb.net/EmployeeManagementSystem?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB connecetd"))

    .catch(err => console.log(err.message));
