import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Rent = () => {

  const [contactNumber, setContactNumber] = useState()
  const [location, setLocation] = useState()
  const [costPerDay, setCostPerday] = useState()
  const [insurance, setInsurance] = useState()
  const [limit, setLimit] = useState()
  const [yearOfManufacture, setyearOfManufacture] = useState()
  const [engine, setEngine] = useState()
  const [vehicleName, setVehicleName] = useState()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/addVehicle", {contactNumber, location, costPerDay, insurance, limit, yearOfManufacture, engine, vehicleName})
    .then((res) => {
      console.log(res)
      navigate("/")
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <div></div>
      <div>
        <h1>Fill the form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Contact no:</label>
            <input type='number' onChange={(e) => setContactNumber(e.target.value)} />
          </div>
          <div>
            <label>Location:</label>
            <input type='text' onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div>
            <label>Cost per day:</label>
            <input type='number' onChange={(e) => setCostPerday(e.target.value)} />
          </div>
          <div>
            <label>Insurance:</label>
            <input type='text' onChange={(e) => setInsurance(e.target.value)} />
          </div>
          <div>
            <label>Limit:</label>
            <input type='number' onChange={(e) => setLimit(e.target.value)} />
          </div>
          <div>
            <label>Year of manufacture:</label>
            <input type='number' onChange={(e) => setyearOfManufacture(e.target.value)} />
          </div>
          <div>
            <label>Engine:</label>
            <input type='text' onChange={(e) => setEngine(e.target.value)} />
          </div>
          <div>
            <label>Vehicle name:</label>
            <input type='text' onChange={(e) => setVehicleName(e.target.value)} />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Rent