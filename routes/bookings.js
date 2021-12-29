const router = require('express').Router();
const BookingModel = require('../models/booking');

//GET
router.get('/', (req,res) => {
    BookingModel.find({}).populate(['guest','room']).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not found!');}
    })
});

router.get('/:bookingID', (req,res) => {
    BookingModel.findById(req.params.bookingID).populate(['guest','room']).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not found!');}
    })
})

//POST
router.post('/', (req,res) => {
    let newBooking= new BookingModel(req.body);
    newBooking.save().then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not created!');}
    })
});

//PUT
router.put('/:bookingID', (req,res) => {
    BookingModel.findByIdAndUpdate(req.params.bookingID).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not updated!');}
    })
})

//DELETE
router.delete('/:bookingID', (req,res) => {
    BookingModel.findByIdAndRemove(req.params.bookingID).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not deleted!');}
    })
});

module.exports = router;