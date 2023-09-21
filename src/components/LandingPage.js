
import React from 'react'
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate()

    function handleSignIn(){
      navigate("/signin")
    }

    function handleSignUp(){
      navigate("/signup")
    }
    
  return (
    <div>
        <h1>This is Landing Page</h1> 
        <button onClick={handleSignIn}>SignIn</button>
        <button onClick={handleSignUp}>SignUp</button>
    </div>
  )
}

export default LandingPage