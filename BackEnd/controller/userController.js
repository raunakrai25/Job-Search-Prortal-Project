const User = require('../models/User')
const mongoose = require('mongoose')
const UserDetails = require('../models/UserDetails')
const CompanyDetails = require('../models/CompanyDetails')
const JWT = require('jsonwebtoken')

exports.signup = (req, res) => {
  let { firstName, lastName, email, password, dateOfBirth, Type } = req.body
  let user = new User({
    firstName,
    lastName,
    email,
    password,
    dateOfBirth,
    Type,
  })
  user
    .save()
    .then(() => {
      const token = getToken(user)
      return res.status(200).send({ user, token })
    })
    .catch((error) => {
      console.error(error)
      return res.status(500).send('Error')
    })
}

exports.login = (req, res) => {
  let { email, password } = req.body
  User.findOne({ email: email })
    .then((user) => {
      console.log(user)
      console.info(`user with email : ${email} was found successfully`)

      if (password === user.password) {
        const token = getToken(user)
        console.info('login successful')
        return res.status(200).send({ user, token })
      }
      console.warn('password incorrect')
      return res.status(401).send('password incorrect')
    })

    .catch((error) => {
      console.error(`user with ${email} does not exist`)
      return res.status(404).send(`user with ${email} does not exist`)
    })
}

exports.details = (req, res) => {
  let { id, name, experience, dateOfBirth, graduation, email, phone_number } =
    req.body
  let userDetails = new UserDetails({
    name,
    id,
    experience,
    dateOfBirth,
    graduation,
    email,
    phone_number,
  })
  userDetails
    .save()
    .then(() => {
      return res.status(200).send(userDetails)
    })
    .catch((error) => {
      console.error(error)
      return res.status(500).send('Error')
    })
}

exports.getCompanyDetailsByCompanyName = (req, res) => {
  let companyNameParam = req.params.companyName
  // let { cName } = req.body
  // let { profile } = req.body
  CompanyDetails.find({ companyName: companyNameParam })
    .then((CD) => {
      if (CD.length === 0) {
        console.info('company details not found!')
        return res.status(200).send([])
      }
      console.log('Comapny details found')
      return res.status(200).send(CD)
    })
    .catch((error) => {
      console.error(error)
      return res.status(500).send('Error')
    })
}

exports.getcompanyDetailsByProfile = (req, res) => {
  let { profile } = req.body
  CompanyDetails.find({ profile: profile })
    .then((CD) => {
      if (CD.length === 0) {
        console.info('comapny details not found!')
        return res.status(200).send([])
      }
      console.log('Comapny details found')
      return res.status(200).send(CD)
    })
    .catch((error) => {
      console.error(error)
      return res.status(500).send('Error')
    })
}

exports.getUserDetailsByEmail = (req, res) => {
  let emailParam = req.params.body
  UserDetails.find({ email: emailParam })
    .then((UD) => {
      if (UD.length === 0) {
        console.info('User details not found!')
        return res.status(200).send([])
      }
      console.log('Comapny details found')
      return res.status(200).send(UD)
    })
    .catch((error) => {
      console.error(error)
      return res.status(500).send('Error')
    })
}

exports.isValid = (req, res) => {
  return res.status(200).send('Token valid')
}

exports.getAllPosts = (req, res) => {
  CompanyDetails.find({})
    .then((CD) => {
      if (CD.length === 0) {
        console.info('comapny details not found!')
        return res.status(200).send([])
      }
      console.log('Comapny details found')
      return res.status(200).send(CD)
    })
    .catch((error) => {
      console.error(error)
      return res.status(500).send('Error')
    })
}

const getToken = (user) => {
  return JWT.sign(
    {
      email: user.email,
    },
    'jobPortalToken',
    {
      expiresIn: '10h',
    }
  )
}
