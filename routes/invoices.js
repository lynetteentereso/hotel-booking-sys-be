const router = require('express').Router();
const InvoiceModel = require('../models/invoice');

//GET
router.get('/', (req,res) => {
    InvoiceModel.find({}).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not found!');}
    })
});

router.get('/:invoiceID', (req,res) => {
    InvoiceModel.findById(req.params.invoiceID).populate(['user', 'booking', 'payment']).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not found!');}
    })
})

//POST
router.post('/', (req,res) => {
    let newInvoice= new InvoiceModel(req.body);
    newInvoice.save().then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not created!');}
    })
});

//PUT
router.put('/:invoiceID', (req,res) => {
    InvoiceModel.findByIdAndUpdate(req.params.invoiceID).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not updated!');}
    })
})

//DELETE
router.delete('/:invoiceID', (req,res) => {
    InvoiceModel.findByIdAndRemove(req.params.invoiceID).then(result => {
        if(result){res.send(result);}
        else{res.send('Resource not deleted!');}
    })
});

module.exports = router;