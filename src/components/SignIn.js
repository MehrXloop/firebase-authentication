import React, { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import './form.css'
import GoogleButton from "react-google-button";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {signIn , googleSignIn} = useUserAuth()
  const [error, setError] = useState("")
  const handleSubmit =async (e) => {

      e.preventDefault();
  
      try{
       await signIn(email,password)
       setError("")
       navigate("/chat")
       console.log(email)
      }catch(err){
        setError(err.message)
      }
   
    
   
   
  };

  const handleGoogleSignIn = async (e)=>{
    e.preventDefault()
    try{
        await googleSignIn()
        navigate("/chat")
    }catch(err){
        setError(err.message)
    }
  }
  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Sign In</h1>
      {error && <p className="error">{error}</p>}
      <label htmlFor="email">Email:</label>
        <input
          name='email'
          placeholder='Email'
          type='email'
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
        <GoogleButton onClick={handleGoogleSignIn}/>
      </form>
    </div>
  );
}

export default SignIn;
