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
    insurance: Joi.string().required(),
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

router.get("/getVehicle/:id", (req, res) => {
    const id = req.params.id
    vehicleModel.findById({_id: id})
    .then(vehicle => res.json(vehicle))
    .catch(err => res.json(err))
})

const updateVehicleSchema = Joi.object({
    contactNumber: Joi.number().required(),
    location: Joi.string().required(),
    costPerDay: Joi.string().required(),
    insurance: Joi.string().required(),
    limit: Joi.number().required(),
    yearOfManufacture: Joi.number().required(),
    engine: Joi.string().required(),
    vehicleName: Joi.string().required()
})

router.put("/updateVehicle/:id", (req, res) => {
    const {contactNumber, location, costPerDay, insurance, limit, yearOfManufacture, engine, vehicleName} = req.body
    const {error} = updateVehicleSchema.validate({contactNumber, location, costPerDay, insurance, limit, yearOfManufacture, engine, vehicleName}) 
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    const id = req.params.id 
    vehicleModel.findByIdAndUpdate({_id: id}, {contactNumber: req.body.contactNumber, location: req.body.location, costPerDay: req.body.costPerDay, insurance: req.body.insurance, limit: req.body.limit, yearOfManufacture: req.body.yearOfManufacture, engine: req.body.engine, vehicleName: req.body.vehicleName}, {new: true})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

router.delete("/deleteVehicle/:id", (req, res) => {
    const id = req.params.id 
    vehicleModel.findByIdAndDelete({_id: id})
    .then((res) => res.json(res))
    .catch(err => res.json(err))
})



module.exports = router