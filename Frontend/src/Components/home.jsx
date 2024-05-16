import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const [vehicles, setVehicles] = useState([])

  const jwtToken = Cookies.get("token")
  const navigate = useNavigate()
  useEffect(() => {
    if(jwtToken === undefined){
      navigate("/login")
    }
  }, [])
  useEffect(() => {
    axios.get("http://localhost:3000/vehicles")
    .then((res) => {
      console.log(res.data)
      setVehicles(res.data)
    })
    .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      <div>
        <Link to='/rent'>
        <button>Rent yours</button>
        </Link>
        
      </div>
      <div>
        {
          vehicles.map((eachVehicle) => (
            <div>
              <h1>{eachVehicle.vehicleName}</h1>
              <img src='' />
              <button>Details</button>
              <div>{eachVehicle.location}</div>
              <div>
                <p>Cost per day Rs {eachVehicle.costPerDay}</p>
                <p>Year of Manufacture {eachVehicle.yearOfManufacture}</p>
              </div>
              <div>
                <p>Limit {eachVehicle.limit} km</p>
                <p>Engine {eachVehicle.engine}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home