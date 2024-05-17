import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateVehicle = () => {

  const [contactNumber, setContactNumber] = useState('')
  const [location, setLocation] = useState('')
  const [costPerDay, setCostPerDay] = useState('')
  const [insurance, setInsurance] = useState('')
  const [limit, setLimit] = useState('')
  const [yearOfManufacture, setYearOfManufacture] = useState('')
  const [engine, setEngine] = useState('')
  const [vehicleName, setVehicleName] = useState('')

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3000/getVehicle/${id}`)
      .then(res => {
        console.log(res)
        setContactNumber(res.data.contactNumber)
        setLocation(res.data.location)
        setCostPerDay(res.data.costPerDay)
        setInsurance(res.data.insurance)
        setLimit(res.data.limit)
        setYearOfManufacture(res.data.yearOfManufacture)
        setEngine(res.data.engine)
        setVehicleName(res.data.vehicleName)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id]) 

  const handleUpdate = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:3000/updateVehicle/${id}`, {
      contactNumber,
      location,
      costPerDay,
      insurance,
      limit,
      yearOfManufacture,
      engine,
      vehicleName
    })
    .then((res) => {
      console.log(res)
      navigate("/")
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Contact no:</label>
          <input
            type='number'
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Cost per day:</label>
          <input
            type='number'
            value={costPerDay}
            onChange={(e) => setCostPerDay(e.target.value)}
          />
        </div>
        <div>
          <label>Insurance:</label>
          <input
            type='text'
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
          />
        </div>
        <div>
          <label>Limit:</label>
          <input
            type='number'
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </div>
        <div>
          <label>Year of manufacture:</label>
          <input
            type='number'
            value={yearOfManufacture}
            onChange={(e) => setYearOfManufacture(e.target.value)}
          />
        </div>
        <div>
          <label>Engine:</label>
          <input
            type='text'
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
          />
        </div>
        <div>
          <label>Vehicle name:</label>
          <input
            type='text'
            value={vehicleName}
            onChange={(e) => setVehicleName(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UpdateVehicle
