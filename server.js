const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv/config')

/* Models */
const User = require('./models/User');
const Exercise = require("./models/Exercise");

const cors = require('cors')

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Bruno:mongo20@cluster0-xgwjt.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('connected to DB')
})

/* Middleware */
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))

/* Routes */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

// All users
app.get('/api/exercise/users', async (req, res) => {
  try {
    const users = await User.find({})
    return res.json(users)
  } catch (err) {
    return res.json({ message: err })
  }
})

// Create user
app.post('/api/exercise/new-user', async (req, res) => {
  let newUser = new User({
    username: req.body.username
  })

  newUser.save((err, data) => { // data contains result of query
    if (err) console.log(err)
    console.log("added user")
    return res.json({
      username: data.username,
      id: data._id
    })
  })
});




// Not found middleware
app.use((req, res, next) => {
  return next({ status: 404, message: 'not found' })
})


/* Error Handling middleware */
app.use((err, req, res, next) => {
  let errCode, errMessage

  if (err.errors) {
    // mongoose validation error
    errCode = 400 // bad request
    const keys = Object.keys(err.errors)
    // report the first validation error
    errMessage = err.errors[keys[0]].message
  } else {
    // generic or custom error
    errCode = err.status || 500
    errMessage = err.message || 'Internal Server Error'
  }
  res.status(errCode).type('txt')
    .send(errMessage)
})

app.listen(3000, () => {
  console.log('Your app is listening on port 3000')
})


