const mongoose = require("mongoose")

const VehicleSchema = new mongoose.Schema({
    contactNumber: Number,
    location: String,
    costPerDay: String,
    insurance: Boolean,
    limit: Number,
    yearOfManufacture: String,
    engine: String,
    vehicleName: String
})

const vehicleModel = mongoose.model("vehicles", VehicleSchema)
module.exports = vehicleModel