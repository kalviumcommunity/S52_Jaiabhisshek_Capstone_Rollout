import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const [vehicles, setVehicles] = useState([])

  const jwtToken = Cookies.get("token")
  const navigate = useNavigate()
  useEffect(() => {
    if(jwtToken === undefined){
      navigate("/login")
    }
  })
  useEffect(() => {
    axios.get("http://localhost:3000/vehicles")
    .then((res) => {
      setVehicles(res.data)
    })
    .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      <div>
        {
          vehicles.map((eachVehicle) => {
            <div>
              <h1>{eachVehicle.vehicleName}</h1>
              <img src='' />
              <button>Details</button>
              <div>{eachVehicle.location}</div>
              <div>
                <p>{eachVehicle.costPerDay}</p>
                <p>{eachVehicle.yearOfManufacture}</p>
              </div>
              <div>
                <p>{eachVehicle.limit}</p>
                <p>{eachVehicle.engine}</p>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Home