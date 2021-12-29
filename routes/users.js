const router = require('express').Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/user')

// Check if email from the registration form exists in database
router.post('/email-exists', (req, res) => {
    UserModel.findOne({email: req.body.email}).then(response => {
        if(response){res.send(true);}
        else{res.send(false);}
    })
});

// Register a new user if email-exists is false
router.post('/register', async (req,res) => {
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    let newUser = new UserModel({email: req.body.email, password: hashedPassword, fullname: req.body.fullname, department: req.body.department.name});
    newUser.save().then(response => {
        res.send(response);
    })

});

// Login
router.post('/login', (req,res) => {
    UserModel.findOne({email: req.body.email}).then(async foundUser =>{
        if(foundUser){
        let match = await bcrypt.compare(req.body.password, foundUser.password); // returns true or false
        if(match){res.send({message: 'Authentication Successful', user: foundUser});}
        else{res.send({error: 'Authentication Failed'});}
        }else{
            res.send({error: "Email not found!"})
        }

    })
});

module.exports = router;