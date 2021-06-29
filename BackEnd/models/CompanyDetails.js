const mongoose = require('mongoose');
const CompanyDetails = new mongoose.Schema({
    companyName : {
        type : String,
        required : true,
    },
    profile : {
        type : String,
        required : true,
    },
    graduation : {
        type : String,
        required : true,
    },
    experience : {
        type : String,
        required : true,
    },
    salary : {
        type : String,
        required : true,
    }
})

module.exports = mongoose.model("CompanyDetails",CompanyDetails,"CompanyDetails")