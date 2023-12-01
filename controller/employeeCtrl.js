
const Employee = require("../models/Employee")
//create employee
const createEmployeeCtrl = async(req, res) =>{
    try{

     const employee = await Employee.create({
        name: req.body.name,
        city: req.body.city,
        isMarried: req.body.isMarried,
        salary : req.body.salary,
        
    })

    res.json({
        status: "success",
        data: employee,


    })
    

}catch(error){

    res.json(error);
}

};
//fetch all employee
const fetchAllEmployeeCtrl = async(req, res) =>{
    try{
        const fetchallemployee = await Employee.find();
    res.json({

        status: "Success",
        message : fetchallemployee

    })

}catch(error){

    res.json(error);
}

};
//fetch certain employee
const fetchCertainEmployeeCtrl = async(req, res) =>{
    try{
        const fetchcertainemployee = await Employee.findById(req.params.id)
    res.json({

        status: "Success",
        message : fetchcertainemployee

    })

}catch(error){

    res.json(error);
}

};

//update certain employee


const updateCertainEmployeeCtrl = async(req, res) =>{
    try{
    const updatedemployee = await Employee.findByIdAndUpdate(req.params.id, {

        name: req.body.name,
        city: req.body.city,
        isMarried: req.body.isMarried,
        salary: req.body.salary
    },
    {
        new: true,
        runValidators: true,

    }
    )
      res.json({
        status: "Success",
        message : updatedemployee


      })


}catch(error){

    res.json(error);
}

};

const delteCertainEmployeeCtrl = async(req, res) =>{
    try{

   const deltedEmployee = await Employee.findByIdAndDelete(req.params.id);
    res.json({

        status: "Success",
        message : deltedEmployee,

    },
   );

}catch(error){

    res.json(error);
}

};



module.exports = {

    createEmployeeCtrl,
    fetchAllEmployeeCtrl,
    fetchCertainEmployeeCtrl,
    updateCertainEmployeeCtrl,
    delteCertainEmployeeCtrl,
    

};
