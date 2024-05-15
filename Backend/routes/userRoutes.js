const express = require("express")
const bcrypt = require("bcrypt")
const userModel = require('../models/User')
const router = express.Router()
const Joi = require('joi')
const jwt = require('jsonwebtoken')
    

const signupSchema = Joi.object({
    name: Joi.string().required().min(3).max(20),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

router.post("/signup", async (req, res) => {
    const { error } = signupSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        const existingUser = await userModel.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists with the given email" });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err});
}
});

router.post("/login", async (req, res) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: "Invalid User" });
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect Password" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '30d' });
        res.json({ token: token, username:  user.username, email: user.email});
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err});
}
});

module.exports = router