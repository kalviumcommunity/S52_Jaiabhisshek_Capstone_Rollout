import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/login", {email, password})
    .then(res => {
      console.log(res)
      if(res.status){
        Cookies.set("token", res.data.token, {expires: 7})
        navigate("/")
      }
    })
    .catch(err => {
      if(err.response && err.response.data.message){
        setError(err.response.data.message)
      }else{
        setError("An error occured")
      }
})
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" onChange={(e) => {setEmail(e.target.value); setError('')}} />
        </div>
        <div>
          <label>Password</label><input type="password" onChange={(e) => {setPassword(e.target.value); setError('')}} /></div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
      <div>
        <h1>ROLL OUT</h1>
        <img src="" alt="signup-img" />
      </div>
    </div>
  )
}

export default Login