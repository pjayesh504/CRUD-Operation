const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

// mongoose.connect("mongodb://127.0.0.1:27017/crud");
mongoose.connect(process.env.URI);

//Get All Data
app.get("/", async (req, res) => {
  await UserModel.find({})
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

// Get user by id
app.get('/getUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

// Update User Detail
app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate({ _id: id }, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  })
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

// Delete User
app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

// Create User
app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})