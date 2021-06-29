const express = require('express')
const router = express()
const userController = require('../controller/userController')
const tokenMiddleware = require('../middleware/isTokenValid')

router.post('/signup', userController.signup)

router.post('/login', userController.login)

router.post('/details', userController.details)

router.post(
  '/search/companyName/:companyName',
  userController.getCompanyDetailsByCompanyName
)

router.post('/search/profile', userController.getcompanyDetailsByProfile)

router.post('/user-details/:email', userController.getUserDetailsByEmail)

router.get('/token', tokenMiddleware.isTokenValid, userController.isValid)

router.get('/getAllPosts', userController.getAllPosts)

module.exports = router
