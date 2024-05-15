import React, { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import './signup.css'

const Signup = () => {
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/signup', {email, name, password})
    .then(res => {
      console.log(res)
      navigate("/login")
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
          <label>Username</label>
          <input type="text" onChange={(e) => {setName(e.target.value); setError('')}} />
        </div>
        <div>
          <label>Password</label><input type="password" onChange={(e) => {setPassword(e.target.value); setError('')}} /></div>
        <div>
          <button type='submit'>Signup</button>
        </div>
      </form>
      <div>
        <h1>ROLL OUT</h1>
        <img src="" alt="signup-img" />
      </div>
    </div>
  )
}

export default Signup