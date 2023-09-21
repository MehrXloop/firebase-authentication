import React from 'react'
import { useUserAuth } from './UserAuthContext'
import { useNavigate } from "react-router-dom";

function Chat() {
  const {user, logOut} = useUserAuth()
  const navigate = useNavigate();
  const handleLogOut = async ()=>{
    try{
      await logOut();
      navigate("/");
    }
    catch(err){
     console.log(err.message)
    }
  }
  return (
    <>
    <div>welcome {user && user.email}</div>
    <button onClick={handleLogOut}>Log out</button>
    </>
  )
}

export default Chat