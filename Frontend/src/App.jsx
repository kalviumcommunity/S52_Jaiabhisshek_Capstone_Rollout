import React from 'react'
import Home from "./Components/Home"
import Signup from './Components/Signup'
import Login from './Components/Login'
import Rent from './Components/Rent'
import Profile from './Components/Profile'

import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/rent' element={<Rent></Rent>} />
        <Route path='/profile' element={<Profile></Profile>} />
      </Routes>
    </div>
  )
}

export default App