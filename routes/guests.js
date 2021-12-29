const router = require('express').Router();
const GuestModel = require('../models/guest');

//GET
router.get('/', (req,res) => {
    GuestModel.find({}).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not found!');}
    })
});

router.get('/:guestID', (req,res) => {
    GuestModel.findById(req.params.guestID).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not found!');}
    })
})

// Check if email exists in database
router.post('/email-exists', (req, res) => {
    GuestModel.findOne({email_address: req.body.email_address}).then(response => {
        if(response){res.send(true);}
        else{res.send(false);}
    })
});


//POST
router.post('/', (req,res) => {
    let newGuest= new GuestModel(req.body);
    newGuest.save().then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not created!');}
    })
});

//PUT
router.put('/:guestID', (req,res) => {
    GuestModel.findByIdAndUpdate(req.params.guestID, req.body).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not updated!');}
    })
})

//DELETE
router.delete('/:guestID', (req,res) => {
    GuestModel.findByIdAndRemove(req.params.guestID).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not deleted!');}
    })
});

module.exports = router;