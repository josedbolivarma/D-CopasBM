import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
// import Sidebar from '../components/sidebar/Sidebar';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  return (
    <Router>
          {/* <Sidebar /> */}

        <Routes>
            <Route path='/login' element={
                    <PublicRoutes isAuth={isLoggedIn}>
                        <Login />
                    </PublicRoutes>
                    }/>

            <Route path='/register' element={
                    <PublicRoutes isAuth={isLoggedIn}>
                        <Register />
                    </PublicRoutes>
                    }/>

            <Route path='/*' element={
              <PrivateRoutes isAuth={isLoggedIn}>
                <DashboardRoutes />
              </PrivateRoutes>
            }/>

      </Routes>
    </Router>
  )
}

export default AppRoutes