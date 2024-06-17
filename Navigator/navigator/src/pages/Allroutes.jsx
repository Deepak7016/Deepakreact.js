import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Aboutpage from './Aboutpage'
import Product from './Product'
import Notfound from './Notfound'
import {Project} from './Project'
import Login from './Login'

import PrivateRoutes from './PrivateRoutes'
const Allroutes = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/about' element={<Aboutpage />}></Route>
        <Route path='/product' element={
        <PrivateRoutes>
        <Product />
        </PrivateRoutes>
        }></Route>
        <Route path='/description/:id' element={<Project />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
