const express = require('express')
const router = express()
const adminController = require('../controller/adminController')

router.post('/signup', adminController.signup)

router.post('/login', adminController.login)

router.post('/details', adminController.details)

router.post('/getApplications/:id', adminController.getApplicationsByJobID)

module.exports = router
