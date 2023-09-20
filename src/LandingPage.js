import { signOut } from 'firebase/auth'
import React from 'react'
import {database} from "./FireBaseConfig"
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate()

    function handleSignOut(){
        signOut(database).then(val =>{
          console.log(val,"val")
          navigate("/")
        })
    }
  return (
    <div>
        <h1>This is Landing Page</h1> 
        <button onClick={handleSignOut}>SignOut</button>
    </div>
  )
}

export default LandingPage