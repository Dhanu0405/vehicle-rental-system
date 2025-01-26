const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userModel = require("./Models/vehicle-rental")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/vehicle-rental")

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    userModel.findOne({email: email})
        .then(user => {
            if(user) {
                if(user.password === password) {
                    res.json("Success")
                } else {
                    res.json("Password Incorrect")
                }
            } else {
                res.json("User not Found")
            }
        })
})

app.post('/register', (req, res) => {
    console.log("Request received:", req.body); // Logs incoming request data
    userModel.create(req.body)
        .then(user => {
            console.log("User created:", user); // Logs created user data
            res.json(user);
        })
        .catch(err => {
            console.error("Error creating user:", err); // Logs error details
            res.status(500).json({ error: err.message });
        });
});

app.listen(3001, () => {
    console.log("Server is Running")
})