const express = require("express")
const Joi = require("joi")
const router = express.Router()
const vehicleModel = require("../models/Vehicles")

router.get("/vehicles", (req, res) => {
    vehicleModel.find()
    .then((vehicles) => res.status(200).json(vehicles))
    .catch((err) => res.json(err))
})

const addVehicleSchema = Joi.object({
    contactNumber: Joi.number().required(),
    location: Joi.string().required(),
    costPerDay: Joi.string().required(),
    insurance: Joi.boolean().required(),
    limit: Joi.number().required(),
    yearOfManufacture: Joi.string().required(),
    engine: Joi.string().required(),
    vehicleName: Joi.string().required()
})



module.exports = router