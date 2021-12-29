const router = require('express').Router();
const PaymentModel = require('../models/payment');


//GET
router.get('/', (req,res) => {
    PaymentModel.find({}).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not found!');}
    })
});

router.get('/:paymentID', (req,res) => {
    PaymentModel.findById(req.params.paymentID).populate(['user', 'invoice']).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not found!');}
    })
})

//POST
router.post('/', (req,res) => {
    let newPayment= new PaymentModel(req.body);
    newPayment.save().then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not created!');}
    })
});

//PUT
router.put('/:paymentID', (req,res) => {
    PaymentModel.findByIdAndUpdate(req.params.paymentID).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not updated!');}
    })
})

//DELETE
router.delete('/:paymentID', (req,res) => {
    PaymentModel.findByIdAndRemove(req.params.paymentID).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not deleted!');}
    })
});

module.exports = router;