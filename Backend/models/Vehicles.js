const mongoose = require("mongoose")

const VehicleSchema = new mongoose.Schema({
    contactNumber: Number,
    location: String,
    costPerDay: String,
    insurance: String,
    limit: Number,
    yearOfManufacture: Number,
    engine: String,
    vehicleName: String
})

const vehicleModel = mongoose.model("vehicles", VehicleSchema)
module.exports = vehicleModel