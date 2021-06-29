const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const cors = require("cors");

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/JobSearchPortal',{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
.then(()=>{
    console.info('MongoDB connected successfully');
})
.catch((error)=>{
    console.error('Error to connect MongoDB');
})

app.use('/user',userRoutes);
app.use('/admin',adminRoutes);


const port = 1111;
app.listen(port,()=>{
    console.log(`this Server is Running on Port ${port}`)
});