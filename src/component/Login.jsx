import React, {useRef } from 'react'
import Movies from './Movies' ;
const Login = () => {

    const email=useRef();
    const password=useRef();
    const getEmail=localStorage.getItem('emailData');
    const getPassword=localStorage.getItem('passwordData');
    const handleSubmit =()=>{
        localStorage.setItem("emailData")
        localStorage.setItem("passwordData")
    };
   
      
  return (
    <>
    {
        getEmail&&getPassword?<Movies />:
    
   <div className='login_form'>
    <form onSubmit={handleSubmit} className="login">
        <label>E-mail</label>
        <input type="email" ref={email}/>
        <label>Password</label>
        <input type="password" ref={password}  />
        <button className='btn' type='submit'>Login</button>
    </form>
    
   </div>
}
   </>
  )
}
export default Login