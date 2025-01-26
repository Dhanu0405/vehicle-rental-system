const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt"); // Import bcrypt
const userModel = require("./Models/vehicle-rental");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/vehicle-rental");

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    userModel.findOne({ email: email })
        .then(user => {
            if (user) {
                // Compare hashed password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        console.error(err);
                        res.status(500).json("Server error");
                    } else if (isMatch) {
                        res.json("Success");
                    } else {
                        res.json("Password Incorrect");
                    }
                });
            } else {
                res.json("User not Found");
            }
        })
        .catch(err => res.status(500).json(err.message));
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Hash the password before saving
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error("Error hashing password:", err);
            res.status(500).json({ error: "Failed to hash password" });
        } else {
            userModel.create({ name, email, password: hashedPassword })
                .then(user => res.json(user))
                .catch(err => res.status(500).json({ error: err.message }));
        }
    });
});

app.listen(3001, () => {
    console.log("Server is Running");
});
