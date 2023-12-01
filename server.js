require("./utils/dbConnect.js"); //db connection

const express = require("express");

const app = express();

const routerEmployee = require("./Routes/router")

//middleware

app.use(express.json()) //pass incoming json data from

//including the router
app.use("/employee", routerEmployee);


app.listen(3000, () =>{

    console.log("server is running at port no 3000");

});