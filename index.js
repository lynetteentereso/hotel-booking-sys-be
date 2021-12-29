const express = require('express');
const app = express();
const PORT = process.env.PORT || 8283;
dotenv.config();

const dotenv = require("dotenv");

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lynette0127:kBu7u4DGadccGsd@cluster0.w0ykw.mongodb.net/myHotelDB?retryWrites=true&w=majority', { 
    useNewUrlParser:    true,
    useUnifiedTopology: true
});

app.get('/', (req,res) => {
    res.send('Olympia Pearl Hotel Booking System Express Server')
   
})

const bookingRouter = require('./routes/bookings');
const departmentRouter = require('./routes/departments');
const guestRouter = require('./routes/guests');
const hotelRouter = require('./routes/hotels');
/* const invoiceRouter = require('./routes/invoices');
const paymentRouter = require('./routes/payments'); */
const roomRouter = require('./routes/rooms');
const userRouter = require('./routes/users');

app.use('/bookings', bookingRouter);
app.use('/departments', departmentRouter);
app.use('/guests', guestRouter);
app.use('/hotels', hotelRouter);
/* app.use('/invoices', invoiceRouter);
app.use('/payments', paymentRouter); */
app.use('/rooms', roomRouter);
app.use('/users', userRouter);

app.listen(port, () => {console.log(`Express server is running on port ${PORT}`)});