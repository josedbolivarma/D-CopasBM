import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../pages/Home'
import Menu from '../pages/Menu'

const DashboardRoutes = () => {
  return (
    <div>
      <Header />
      <Banner />
    <Routes>
        {/* Dashboard */}
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
        {/* Dashboard */}
    </Routes>
    <Footer />
    </div>
  )
}

export default DashboardRoutes