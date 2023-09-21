import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterAndLogin from './SignUp';
import LandingPage from './LandingPage';
function PasswordLoginWithFirebase() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route  path="/" element={<RegisterAndLogin/>}/>
        <Route  path="/home" element={<LandingPage/>}/>
        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default PasswordLoginWithFirebase