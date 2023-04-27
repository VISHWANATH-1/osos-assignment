import React, {useRef } from 'react'
import Movies from './Movies' ;
// import './Styl.css'
const Login = (props) => {

    const name =useRef();  
    const email=useRef();
    const password=useRef();
    const handleClick =()=>{
      if(name.current.value&&email.current.value&&password.current.value)
      {
      localStorage.setItem("Name",name.current.value)
      localStorage.setItem("emailData",email.current.value)
      localStorage.setItem("passwordData",password.current.value)
      alert("Account Created Sucessfully")
      } 
    };
   
      
  return (
    <div>
    {
        Login?<Movies/> :
    
    <div className='container'>
        <div>
          <input placeholder='Name' type="text" ref={name} />
        </div>
        <div>
          <input placeholder='Email' type="email" ref={email}/>
        </div>
        <div>
          <input placeholder='Password' type="password" ref={password}/>
        </div>   
        <button className='btn' onClick={handleClick}>Login</button>
    </div>
}
   </div>
  )
}
export default Login