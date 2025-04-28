import React from 'react'
import Login from './pages/Login'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}
