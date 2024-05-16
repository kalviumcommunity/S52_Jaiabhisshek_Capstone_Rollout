import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const jwtToken = Cookies.get("token")
  const navigate = useNavigate()
  useEffect(() => {
    if(jwtToken === undefined){
      navigate("/login")
    }
  })
  return (
    <div>
      Home
    </div>
  )
}

export default Home