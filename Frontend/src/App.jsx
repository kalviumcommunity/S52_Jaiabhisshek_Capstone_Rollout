import React from 'react'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Rent from './Components/Rent'
import Profile from './Components/Profile'

import {Route, Routes} from 'react-router-dom'
import UpdateVehicle from './Components/UpdateVehicle'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/rent' element={<Rent />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/updateVehicle/:id' element={<UpdateVehicle />} />
      </Routes>
    </div>
  )
}

export default App