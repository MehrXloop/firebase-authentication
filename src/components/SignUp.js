import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './form.css'
import { useUserAuth } from "../context/UserAuthContext";


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const {signUp} = useUserAuth()
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();


    try{
     await signUp(email,password)
     setError("")
     navigate("/signin")
     console.log(email)
    }catch(err){
      setError(err.message)
    }
  };

  return (
    <div className='container'>
      <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Sign Up</h1>
      {error && <p className="error">{error}</p>}
      <label htmlFor="email">Email:</label>
        <input
          name='email'
          placeholder='Email'
          type='email'
          value={email}
          id="email"
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
