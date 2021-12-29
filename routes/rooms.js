const router = require('express').Router();
const RoomModel = require('../models/room');

//GET
router.get('/', (req,res) => {
    RoomModel.find({}).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not found!');}
    })
});

router.get('/:roomID', (req,res) => {
    RoomModel.findById(req.params.roomID).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not found!');}
    })
})

//POST
router.post('/', (req,res) => {
    let newRoom= new RoomModel(req.body);
    newRoom.save().then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not created!');}
    })
});

//PUT
router.put('/:roomID', (req,res) => {
    RoomModel.findByIdAndUpdate(req.params.roomID).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not updated!');}
    })
})

//DELETE
router.delete('/:roomID', (req,res) => {
    RoomModel.findByIdAndRemove(req.params.roomID).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not deleted!');}
    })
});

module.exports = router;