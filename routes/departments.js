const router = require('express').Router();
const DepartmentModel = require('../models/department');

//GET
router.get('/', (req,res) => {
    DepartmentModel.find({}).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not found!');}
    })
});

router.get('/:departmentID', (req,res) => {
    DepartmentModel.findById(req.params.departmentID).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not found!');}
    })
})

//POST
router.post('/', (req,res) => {
    let newDepartment = new DepartmentModel(req.body);
    newDepartment.save().then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not created!');}
    })
});

//PUT
router.put('/:departmentID', (req,res) => {
    DepartmentModel.findByIdAndUpdate(req.params.departmentID).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not updated!');}
    })
})

//DELETE
router.delete('/:departmentID', (req,res) => {
    DepartmentModel.findByIdAndRemove(req.params.departmentID).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not deleted!');}
    })
});

module.exports = router;