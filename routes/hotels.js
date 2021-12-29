const router = require('express').Router();
const HotelModel = require('../models/hotel');

//GET
router.get('/', (req,res) => {
    HotelModel.find({}).then(result => {
        res.send(result);
    })
});

router.get('/:hotelID', (req,res) => {
    HotelModel.findById(req.params.hotelID).then(result => {
        res.send(result);
    })
})

//POST
router.post('/', (req,res) => {
    let newHotel= new HotelModel(req.body);
    newHotel.save().then(result => {
        res.send(result);
    })
});

//PUT
router.put('/:hotelID', (req,res) => {
    HotelModel.findByIdAndUpdate(req.params.hotelID).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not updated!');}
    })
})

//DELETE
router.delete('/:hotelID', (req,res) => {
    HotelModel.findByIdAndRemove(req.params.hotelID).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not deleted!');}
    })
});

module.exports = router;