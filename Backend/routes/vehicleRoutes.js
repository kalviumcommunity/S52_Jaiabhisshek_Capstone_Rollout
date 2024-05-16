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
    yearOfManufacture: Joi.number().required(),
    engine: Joi.string().required(),
    vehicleName: Joi.string().required()
})

router.post("/addVehicle", (req, res) => {
    const {error} = addVehicleSchema.validate(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    vehicleModel.create(req.body)
    .then((eachVehicle) => res.status(201).json(eachVehicle))
    .catch(err => res.json(err))
})



module.exports = router