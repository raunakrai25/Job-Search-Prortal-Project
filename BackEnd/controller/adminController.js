const Admin = require('../models/Admin')
const md5 = require('md5')
const CompanyDetails = require('../models/CompanyDetails')
const UserDetails = require('../models/UserDetails')
const JWT = require('jsonwebtoken')

exports.signup = (req, res) => {
  let { firstName, lastName, email, password, dateOfBirth, companyName } =
    req.body
  let admin = new Admin({
    firstName,
    lastName,
    email,
    password,
    dateOfBirth,
    companyName,
  })

  admin
    .save()
    .then(() => {
      const token = getToken(admin)
      return res.status(200).send({ admin, token })
    })
    .catch((error) => {
      console.error(error)
      return res.status(500).send('Error')
    })
}

exports.login = (req, res) => {
  let { email, password } = req.body
  Admin.findOne({ email: email })
    .then((admin) => {
      console.log(admin)
      console.info(`user with email : ${email} was found successfully`)

      if (password === admin.password) {
        const token = getToken(admin)
        console.info('login successful')
        return res.status(200).send({ admin, token })
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
  let { companyName, profile, graduation, experience, salary } = req.body
  let companyDetails = new CompanyDetails({
    companyName,
    profile,
    graduation,
    experience,
    salary,
  })
  companyDetails
    .save()
    .then(() => {
      return res.status(200).send(companyDetails)
    })
    .catch((error) => {
      console.error(error)
      return res.status(500).send('Error')
    })
}

exports.getApplicationsByJobID = (req, res) => {
  let ID = req.params.id
  UserDetails.find({ id: ID })
    .then((CD) => {
      if (CD.length === 0) {
        console.info('applications not found!')
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

exports.isValid = (req, res) => {
  return res.status(200).send('Token valid')
}

const getToken = (admin) => {
  return JWT.sign(
    {
      email: admin.email,
    },
    'jobPortalToken',
    {
      expiresIn: '10h',
    }
  )
}
