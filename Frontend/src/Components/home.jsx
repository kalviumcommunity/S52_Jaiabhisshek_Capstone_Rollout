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
      setVehicles(res.data)
    })
    .catch((err) => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/deleteVehicle/${id}`)
    .then(() => {
      window.location.reload()
    })
    .catch(err => console.log(err))
  }

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
            <div key={eachVehicle._id}>
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
              <Link to={`/updateVehicle/${eachVehicle._id}`}>
              <button>Update</button>
              </Link>
              <button onClick={() => handleDelete(eachVehicle._id)}>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home